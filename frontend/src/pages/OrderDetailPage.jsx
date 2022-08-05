import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { OrderDetail } from '../components/order_detail/OrderDetail';

export const OrderDetailPage = () => {
  let { orderId } = useParams();
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/orders/', {
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    })
      .then((response) => response.json())
      .then((actualData) => setOrder(actualData));
  }, []);

  return (
    <div>
      { orders.map(order => (
        order.id == orderId
        ? <OrderDetail key={ order.id } orderId={ order.id } idDone={ order.is_done } orderDishes={ order.dishes } />
        : ''
      )) }
    </div>
  )
}
