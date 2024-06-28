from rest_framework import serializers
from .models import User, Story, Fragment, Comment, Vote
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'status', 'profile_pic', 'created_at', 'last_login', 'is_active', 'is_admin']
        extra_kwargs = {
            'password': {'write_only': True}
        }

class StorySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Story
        fields = ['id', 'user', 'title', 'description', 'private', 'created_at', 'votes_count']

class FragmentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    story = StorySerializer(read_only=True)
    parent_fragment = serializers.PrimaryKeyRelatedField(queryset=Fragment.objects.all(), allow_null=True)

    class Meta:
        model = Fragment
        fields = ['id', 'story', 'user', 'parent_fragment', 'content', 'created_at']

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    fragment = FragmentSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'user', 'fragment', 'content', 'created_at']

class VoteSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    story = StorySerializer(read_only=True)

    class Meta:
        model = Vote
        fields = ['id', 'user', 'story', 'created_at']
        validators = [
            serializers.UniqueTogetherValidator(
                queryset=Vote.objects.all(),
                fields=['user', 'story'],
                message="You have already voted on this story."
            )
        ]