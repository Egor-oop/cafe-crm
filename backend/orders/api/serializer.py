from rest_framework import serializers
from orders.models import Order, OrderItem
from drf_writable_nested import WritableNestedModelSerializer

from dishes.api.serializers import DishSerializer


class OrderItemSerializer(serializers.ModelSerializer):
    # dish = DishSerializer(read_only=True)
    class Meta:
        model = OrderItem
        fields = (
            'dish',
            'quantity',
        )


class OrderSerializer(serializers.ModelSerializer):
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
        order_items = validated_data.pop('dishes')
        order = Order.objects.create(**validated_data)
        for dish in order_items:
            OrderItem.objects.create(order=order, **dish)
        return order
    
    def update(self, instance, validated_data):
        order_items = validated_data.pop('dishes')

        instance.is_done = validated_data.get('is_done', instance.is_done)
        instance.save()

        for dish in order_items:
            order_item = OrderItem.objects.get(order=instance)
            order_item.dish = dish['dish']
            order_item.quantity = dish['quantity']
            order_item.save()

        return instance


class OrderNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'is_done')
