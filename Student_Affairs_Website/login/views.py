# from django.core. import reverse
from audioop import reverse
from http.client import HTTPResponse
from django.http import JsonResponse ,HttpResponseRedirect
from django.shortcuts import render , redirect
from django.contrib import messages,auth
from django.contrib.auth import authenticate , login , logout
from django.contrib.auth.models import User
# from .models import User
# Create your views here.
# logged
def index(request):
    if request.method == 'POST':
        username = request.POST.get("username")
        password = request.POST.get("password")
        print(username + " " + str(password))
        tt = User.objects.all()
        print(authenticate(request , username= username,password = password))
        try:
            user = User.objects.get(username= username)
        except:
            return render(request , 'login/index.html',context={'type':'username','username':username ,'password':password})
        if  authenticate(request , username= username,password = password) == None:
            return render(request , 'login/index.html',context={'type':'password','username':username,'password':password})
        auth = authenticate(request , username= username,password = password)
        if auth is not None:
            login(request ,auth)
            return redirect('home')
    return render(request , 'login/index.html')

def ll(request):
    logout(request)
    return redirect('home')
        # try:
            # authenticate(request , username= username,password = password)
            # user = User.objects.get(username= username,password = password)
        # except:
            # return render(request , 'login/index.html',context={'type':'password','username':username,'password':password})
        # if request.is_ajax():
            # return JsonResponse(list(data),safe=False)
        # user = User.objects.get(username= username,password = password)
            # print(loggedIN)
        # else:
            # print("wrong username")
        # except:
        # print('error')
            # messages.error(request, 'wrong username')
        # pw = User.objects.get(password = password)