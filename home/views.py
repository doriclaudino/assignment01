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


models = [{"name": "iphone 7", "src": "static/images/iphone7.png"},
          {"name": "iphone 7 Plus", "src": "static/images/iphone7.png"},
          {"name": "iphone 8", "src": "static/images/iphonex.png"},
          {"name": "iphone 8 Plus", "src": "static/images/iphonex.png"}]


conditions = [{"name": "Flawless", "src": "static/images/condition-flawless.png"},
              {"name": "Good", "src": "static/images/condition-good.png"},
              {"name": "Damaged", "src": "static/images/condition-damaged.png"},
              {"name": "No Power", "src": "static/images/condition-nopower.png"}]

sizes = [{"name": "256gb", "src": "static/images/size-256.png"},
         {"name": "128gb", "src": "static/images/size-128.png"},
         {"name": "64gb", "src": "static/images/size-64.png"},
         {"name": "32gb", "src": "static/images/size-32.png"}]


def sell_my_phone(request):
    return render(request, 'home/sell_my_phone.html', {"models": models,  "sizes": sizes, "conditions": conditions})
