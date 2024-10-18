from django.urls import path
from .views import ShoeList

urlpatterns = [
    path('shoes/', ShoeList.as_view(), name='shoe-list'),
]