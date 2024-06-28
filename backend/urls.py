from django.urls import path
from .views import *

urlpatterns = [
    path('user/<str:username>', GetUser.as_view()),
    path('validate-user', ValidateUser.as_view()),
    path('create-user', CreateUser.as_view()),
    path('create-story', CreateStory.as_view())
]