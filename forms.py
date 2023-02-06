from django import forms
from .models import Image_portfolio_homepage, Services_myapp, Client_comment

class ImageForm(forms.ModelForm):
    class Meta:
        model = Image_portfolio_homepage
        fields = ('title', 'description', 'image')

class ClientForm(forms.ModelForm):
    class Meta:
        model = Client_comment
        fields = ('comment', 'logo', 'name')     