# What functions should example.com/user/ have?
# A POST function to add a user to the database
# A GET function to retrieve user information
#   Need to check the requested email password combo already exists, if it does login
#   If the requested email already exists, do not register the account

from django.urls import path
from . import views

urlpatterns = [
    path('api/all-notes/', views.get_notes, name='all-notes'),
    path('api/add-note/', views.create_note, name='create-note'),
]