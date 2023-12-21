from django.db import models
from django import forms

class User(models.Model):
    email = models.EmailField(max_length = 100)
    password = models.CharField(max_length=50, default='')

    def __str__(self):
        return self.email