from rest_framework import serializers
from orders.models import Order, OrderItem
from drf_writable_nested import WritableNestedModelSerializer

from dishes.api.serializers import DishSerializer


class OrderItemSerializer(serializers.ModelSerializer):
    dish = DishSerializer(read_only=False)

    class Meta:
        model = OrderItem
        fields = (
            'dish',
            'quantity',
        )


class OrderSerializer(WritableNestedModelSerializer,
                      serializers.ModelSerializer):
    dishes = OrderItemSerializer(many=True, read_only=False)

    class Meta:
        model = Order
        fields = (
            'id',
            'is_done',
            'dishes',
            # 'created_at',
            # 'updated_at',
        )

    def create(self, validated_data):
        items_data = validated_data.pop('dishes')
        order = Order.objects.create(**validated_data)

        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)

        return order


class OrderNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'is_done')
