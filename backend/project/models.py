from django.db import models


class Task(models.Model):

    class Status(models.TextChoices):
        PENDING     = 'pending',     'Pending'
        IN_PROGRESS = 'in_progress', 'In Progress'
        COMPLETED   = 'completed',   'Completed'

    title       = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')
    status      = models.CharField(
                      max_length=20,
                      choices=Status.choices,
                      default=Status.PENDING,
                      db_index=True,
                  )
    create_date = models.DateTimeField(auto_now_add=True)
    due_date    = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ['-create_date']

    def __str__(self):
        return self.title



class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title