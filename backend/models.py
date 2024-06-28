from django.db import models
from django.contrib.auth.hashers import make_password

class User(models.Model):
    email = models.EmailField(max_length=255)
    username = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255, default=make_password('defaultpassword'))
    status = models.CharField(max_length=50) # 1 = active, 2 = unactive, 0 = banned
    profile_pic = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin

class Story(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_stories')
    title = models.CharField(max_length=255)
    description = models.TextField()
    private = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    votes_count = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class Fragment(models.Model):
    story = models.ForeignKey(Story, on_delete=models.CASCADE, related_name='story_fragments')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_fragments')
    parent_fragment = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='child_fragments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content[:50]  # Returns the first 50 characters of the content

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_comments')
    fragment = models.ForeignKey(Fragment, on_delete=models.CASCADE, related_name='fragment_comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content[:50]  # Returns the first 50 characters of the content

class Vote(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_votes')
    story = models.ForeignKey(Story, on_delete=models.CASCADE, related_name='story_votes_count')  # Changed related_name
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'story')  # Ensure unique user-story pair for voting

    def __str__(self):
        return f'{self.user.username} voted on {self.story.title}'
