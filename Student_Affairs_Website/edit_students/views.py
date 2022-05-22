from django.shortcuts import render
from all_students.models import Students
# Create your views here.

def index(request):
    student = Students.objects.filter(status = True).order_by('id')
    print(student[0])
    students = {'students':student}
    return render(request, 'edit_students/index.html',students)