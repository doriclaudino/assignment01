from django.shortcuts import render

# Create your views here.

# active_view help to controll the view returned and mark the menu as active
# /home is our default route
def home(request):
    return render(request, 'home/home.html', {'active_view': 'home'})

def get_started(request):
    return render(request, 'home/get_started.html')


def reviews(request):
    return render(request, 'home/reviews.html')


def contact(request):
    return render(request, 'home/contact.html')


def sell_my_phone(request):
    return render(request, 'home/sell_my_phone.html')
