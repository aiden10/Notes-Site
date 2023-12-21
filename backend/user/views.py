from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
import json

@csrf_exempt
def register(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        email_exists = User.objects.filter(email=email).exists() # not exactly sure how this filter function works

        if email_exists:
            return JsonResponse({'Error': 'Account already associated with that email'}) # invalid if email already exists
        else:
            new_user = User(email=email, password=password)
            new_user.save()
            return JsonResponse({'Success': 'Account created'}) # make account if email doesn't already exist
        
    except json.JSONDecodeError:
        return JsonResponse({'Error': 'Invalid JSON data'})

@csrf_exempt
def login(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        user_exists = User.objects.filter(email=email, password=password).exists()

        if user_exists:
            return JsonResponse({'Success':'Logged in'})
        else:
            return JsonResponse({'Error':'Failed to login'})
    except json.JSONDecodeError:
        return JsonResponse({'Error': 'Invalid JSON data'})

