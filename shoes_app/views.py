from rest_framework import generics
from .models import Shoe
from .serializers import ShoeSerializer

class ShoeList(generics.ListAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer