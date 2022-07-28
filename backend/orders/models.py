from django.db import models

from dishes.models import Dish


class Order(models.Model):
    dishes = models.ManyToManyField(Dish,
                                    verbose_name='Блюда')
    is_done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
