from django.urls import path
from .views import index,ll

urlpatterns = [
    path('', index , name='login'),
    path('logout/', ll , name='logout')
]