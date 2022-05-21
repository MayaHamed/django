from django.shortcuts import render
from django.http import HttpResponse
from .models import Students


def index(request):
    students = Students.objects.order_by('id')
    pass_db = {'students':students}
    print(students[2])
    return render(request,'all_students/index.html',context=pass_db)
    # return HttpResponse("hello world")
