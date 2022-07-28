from django.urls import path

from .api.views import DishList, DishDetail

urlpatterns = [
    path('', DishList.as_view(), name='list'),
    path('<pk>', DishDetail.as_view(), name='dish'),
]
