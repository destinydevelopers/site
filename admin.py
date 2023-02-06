from django.contrib import admin

from .models import Image_portfolio_homepage, Client_comment
from .forms import ImageForm, ClientForm

class ImageAdmin(admin.ModelAdmin):
    form = ImageForm

admin.site.register(Image_portfolio_homepage, ImageAdmin)
  

class ClientAdmin(admin.ModelAdmin):
    form = ClientForm
admin.site.register(Client_comment, ClientAdmin)
