from django.shortcuts import render
from .models import Announcements
from langdetect import detect
# Create your views here.
def index(request):
    ann = Announcements.objects.all()
    home = {"ann" : ann}
    return render(request, 'home/index.html',context=home)