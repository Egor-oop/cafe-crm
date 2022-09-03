from django.urls import path

from .api.views import OrderList, OrderDetail, OrderItemList

urlpatterns = [
    path('', OrderList.as_view(), name='list'),
    path('<pk>', OrderDetail.as_view(), name='order'),
    path('items/', OrderItemList.as_view(), name='order_items'),
]
