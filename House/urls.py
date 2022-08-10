from django.urls import re_path
from House import views

urlpatterns = [
    re_path(r'^house/$', views.houseApi),
    re_path(r'^house/([0-9]+)$', views.houseApi),
]
