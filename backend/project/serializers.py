from rest_framework import serializers
from .models import Task
from .models import Note


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model  = Task
        fields = ['id', 'title', 'description', 'status', 'create_date', 'due_date']
        read_only_fields = ['id', 'create_date']

    def validate_title(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Title may not be blank.")
        return value

    def validate_status(self, value):
        valid = Task.Status.values
        if value not in valid:
            raise serializers.ValidationError(
                f"Status must be one of: {', '.join(valid)}."
            )
        return value
    
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
