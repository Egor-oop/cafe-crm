import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Order } from '../components/Order';

export const OrdersStaffView = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/orders/', {
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    })
      .then((response) => response.json())
      .then((actualData) => (setOrder(actualData) & console.log(actualData)));
  }, []);
  return (
    <div className='orders-staff'>
      { orders.map(order => (
        <Link className='orders-staff__order' key={order.id} to={`/orders-staff/${order.id}`}>
          <Order orderId={order.id} isDone={order.is_done}
          orderDishes={order.dishes} />
        </Link>
      )) }
    </div>
  )
}
