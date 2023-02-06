from django.shortcuts import render
from .models import Services_servicepage, Image_portfolio_homepage, Client_comment
from services.models import Services_servicepage
from django.shortcuts import render


def home(request):
    services_data = Services_servicepage.objects.all()
    images = Image_portfolio_homepage.objects.all()
    client = Client_comment.objects.all()
    context = {'services_data': services_data,
                'images': images,
                'client': client,
              }
    return render(request, 'index.html', context)

def about(request):
      return render(request, 'about.html')

