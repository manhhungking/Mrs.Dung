from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.paginator import Paginator
# Create your views here.

from house.models import Houses
from house.serializers import HouseSerializer

import os

@csrf_exempt
def houseApi(request):
    if request.method == 'GET':
        os.system("python import-data.py")
        page_number = request.GET.get('page') #page is the page u want to get
        house_type = request.GET.get('house_type') #house_type la loaihinh
        house_certificate = request.GET.get('house_certificate') #house_certificate la chung chi so huu
        house_owner = request.GET.get('house_owner') #house_owner la chu so huu
        house_address = request.GET.get('house_address') #house_address la dia chi nha
        house_type_increase = request.GET.get('house_type_increase') #house_type_increase la tang hay giam dan
        houses = Houses.objects.all()
        if house_type_increase is not None and house_type_increase != "":
            if house_type_increase == "True":
                houses = houses.order_by('LoaiHinh')
            elif house_type_increase == "False":
                houses = houses.order_by('-LoaiHinh')
        if house_type is not None and house_type != "":
            houses = houses.filter(LoaiHinh=house_type)
        if house_certificate is not None and house_certificate != "":
            houses = houses.filter(ChungNhanSoHuu=house_certificate)    
        if house_owner is not None and house_owner != "":
            houses = houses.filter(TacGia__icontains=house_owner) #icontains = LIKE '%house_owner%'
            #print(house_owner)
        if house_address is not None and house_address != "":
            houses = houses.filter(DiaChi__icontains=house_address)
        
        paginator = Paginator (houses, 8) # 8 is the number of records per page
        total_page = paginator.num_pages
        houses_serializer = HouseSerializer(paginator.page(page_number), many=True)
        return JsonResponse({'total_page': total_page,'house_data': houses_serializer.data})
    elif request.method == 'POST':
        houses_data = JSONParser().parse(request)
        houses_serializer = HouseSerializer(data=houses_data)
        if houses_serializer.is_valid():
            houses_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)
