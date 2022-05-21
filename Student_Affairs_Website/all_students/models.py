from django.db import models

class Students(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=48)
    gpa = models.IntegerField()
    level = models.IntegerField()
    gender = models.CharField(max_length=6)
    status = models.CharField(max_length=10,default='Active')
    Department = models.CharField(max_length=10,default='General')
    email = models.EmailField(max_length=80)
    date_of_birth = models.DateField()
    mobile_number = models.CharField(max_length=11)
