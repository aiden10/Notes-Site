from django.http import JsonResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .serializer import NoteSerializer
import json
from .models import Note

@csrf_exempt
def get_notes(request):
    if request.method == 'GET':
        all_notes = Note.objects.all()
        serialized_notes = NoteSerializer(all_notes, many=True)
        return JsonResponse({'notes': serialized_notes.data})
    else:
        return JsonResponse({'Error': 'Bad HTTP Request'})


@csrf_exempt
def create_note(request):
    try:
        data = json.loads(request.body)
        title = data.get('title')
        contents = data.get('contents')
        new_note = Note(note_title = title, note_contents = contents)
        new_note.save()
        return JsonResponse({'status': 'success'})
    except json.JSONDecodeError:
        return JsonResponse({'Error': 'Invalid JSON data'})
