from django.shortcuts import render
from django.contrib import messages
from .models import User
# Create your views here.
def index(request):
    if request.method == 'POST':
        username = request.POST.get("username")
        password = request.POST.get("password")
        print(username + " " + str(password))
        try:
            user = User.objects.get(username = username)
        except:
            print('error')
            messages.error(request, 'wrong username')
        pw = User.objects.get(password = password)
    return render(request , 'login/index.html')