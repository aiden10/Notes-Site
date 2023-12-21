from django.db import models

class Note(models.Model):
    note_title = models.CharField(max_length=50)
    note_contents = models.CharField(max_length=250)
    class Meta:
        app_label = 'text'

    def __str__(self):
        return self.note_title