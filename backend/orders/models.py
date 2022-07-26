from django.db import models

from dishes.models import Dish


class Order(models.Model):
    dishes = models.ManyToManyField(Dish,
                                    verbose_name='Блюда')
    created_at = models.DateTimeField(auto_now_add=True,)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'


# class OrderDishes(models.Model):
#     order = models.ForeignKey(Order, on_delete=models.CASCADE,
#                               verbose_name='Заказ')
#     dish = models.ForeignKey(Dish, on_delete=models.CASCADE,
#                              verbose_name='Блюдо')
#     quantity = models.IntegerField(verbose_name='Количество')
