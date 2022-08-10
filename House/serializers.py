from rest_framework import serializers
from House.models import Houses


class HouseSerializer (serializers.ModelSerializer):
    class Meta:
        model = Houses
        fields = ('house_id',
                  'LoaiHinh',
                  'TacGia',
                  'SoDienThoai',
                  'Gia',
                  'DienTich',
                  'DiaChi',
                  'ChungNhanSoHuu')
