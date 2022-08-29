from rest_framework import generics
from .serializer import OrderSerializer, OrderNumberSerializer, OrderItemSerializer

from orders.models import Order, OrderItem


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.order_by('-id')
    serializer_class = OrderSerializer


class OrderDetail(generics.RetrieveUpdateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderNumberList(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderNumberSerializer


class OrderItemList(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
