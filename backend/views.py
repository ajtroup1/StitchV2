from django.shortcuts import render
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import transaction
from django.contrib.auth.hashers import make_password
from .serializers import *
from django.contrib.auth import authenticate
from django.db.models import Q
from django.contrib.auth.hashers import check_password
from django.db.models import Count

# USER
def validate_username(username):
    if len(username) < 4 or len(username) > 20:  # Username must be between 4 and 20 chars
        return False
    
    return True
    
def validate_password(password):
    if len(password) < 8:  # Password must be at least 8 chars
        return False
    if not any(char.isupper() for char in password):  # Must contain an uppercase char
        return False
    if not any(char.islower() for char in password):  # Must contain a lowercase char
        return False
    if not any(char.isdigit() for char in password):  # Must contain a number
        return False
    if not any(char in '!@#$%^&*()-_=+[{]}\|;:\'",<.>/?`~' for char in password):  # Must contain a special char
        return False
    
    return True

class GetUser(APIView):
    def get(self, request, username):
        user = User.objects.filter(username=username).first()

        if not user:
            return Response({"error": f"No user found with username '{username}'"}, status=status.HTTP_404_NOT_FOUND)

        # Annotate users with the count of their stories
        users = User.objects.annotate(num_stories=Count('user_stories')).order_by('-num_stories')

        # Determine the rank of the requested user
        rank = list(users).index(user) + 1  # Adding 1 to convert index to rank (1-based)

        # Serialize the user along with rank
        serializer = UserSerializer(user)
        response_data = {
            "user": serializer.data,
            "rank": rank
        }

        return Response(response_data, status=status.HTTP_200_OK)
    
class ValidateUser(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({"error": "Username and password are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(Q(username=username) | Q(email=username))  # Allows login via username or email
        except User.DoesNotExist:
            return Response({"error": "Invalid username or password."}, status=status.HTTP_400_BAD_REQUEST)

        if not check_password(password, user.password):
            return Response({"error": "Invalid username or password."}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"message": "Success"}, status=status.HTTP_200_OK)

class CreateUser(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        first_name = request.data.get('firstname').capitalize()
        last_name = request.data.get('lastname').capitalize()
        email = request.data.get('email')
        profile_pic = request.data.get('profileURL')
        is_admin = request.data.get('isAdmin', False)

        if not all([username, password, first_name, last_name, email]):
            return Response({"error": "All fields are required."}, status=status.HTTP_400_BAD_REQUEST)

        if not validate_username(username):
            return Response({"error": "Username must be between 4 and 20 characters."}, status=status.HTTP_400_BAD_REQUEST)

        if not validate_password(password):
            return Response({"error": "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character."}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the username is unique
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)

        hashed_password = make_password(password)

        try:
            with transaction.atomic():
                user = User(
                    username=username,
                    password=hashed_password,
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    status='1',
                    profile_pic=profile_pic,
                    is_admin=is_admin
                )
                user.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
# STORY
class GetStory(APIView):
    def get(self, request, id):
        story = Story.objects.filter(id=id).prefetch_related('story_fragments').first()
        if not story:
            return Response({"error": "Story not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = StorySerializer(story)
        return Response({"story": serializer.data}, status=status.HTTP_200_OK)
    
class CreateStory(APIView):
    def post(self, request):
        username = request.data.get('username')
        user = User.objects.filter(username=username).first()
        
        title = request.data.get('title')
        description = request.data.get('description')
        private = request.data.get('private', False)  # Default to False if not provided
        content = request.data.get('content')  # Assuming content is provided for the initial fragment

        if not all([title, description, content]):
            return Response({"error": "Title, description, and content are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            with transaction.atomic():
                story = Story.objects.create(
                    user=user,
                    title=title,
                    description=description,
                    private=private
                )

                initial_fragment = Fragment.objects.create(
                    story=story,
                    user=user,
                    content=content
                )

            story_serializer = StorySerializer(story)
            fragment_serializer = FragmentSerializer(initial_fragment)
            
            # Can disable story and initial fragment, could be unnecessary to return. Just for testing
            return Response({
                "message": "Story created successfully",
                "story": story_serializer.data,
                "initial_fragment": fragment_serializer.data
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)