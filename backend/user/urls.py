# What functions should example.com/user/ have?
# A POST function to add a user to the database
# A GET function to retrieve user information
#   Need to check the requested email password combo already exists, if it does login
#   If the requested email already exists, do not register the account

from django.urls import path
from . import views

urlpatterns = [
    path('api/register/', views.register, name='register'), # check if email already exists, then make account based on that
    path('api/login/', views.login, name='login') # check if matching email and password exist, return true or false

]