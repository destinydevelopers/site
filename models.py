from django.db import models
from services.models import Services_servicepage

class Image_portfolio_homepage(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='images_portfolio_homepage/')

class Client_comment(models.Model):
    name = models.CharField(max_length=40, default='Client Name')
    comment = models.TextField(default='Client Comment')
    logo = models.ImageField(upload_to='client_comment/')
    date = models.DateTimeField(auto_now_add=True)

class Services_myapp(models.Model):
    services = models.ForeignKey(Services_servicepage, on_delete=models.CASCADE)    



    




