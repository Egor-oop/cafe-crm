import { UsersOrderView } from '../components/UsersOrderView';

import { useState, useEffect } from 'react';

export const OrdersStatuses = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      fetch('http://127.0.0.1:8000/api/v1/orders-numbers/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
      })
        .then((response) => response.json())
        .then((actualData) => (setOrder(actualData) & console.log(actualData)));
    }
    return () => []
  }, [orders]);

  return (
    <div className='main'>
      <div className='orders__not-done'>
        <h2 className='orders__not-done-header'>Готовятся</h2>

        {orders.map(order => (
          !order.is_done ?
            <UsersOrderView key={order.id} orderId={order.id} />
            : ''
        ))}
      </div>
      <div className='orders__done'>
        <h2 className='orders__done-header'>Готовы</h2>

        {orders.map(order => (
          order.is_done ?
            <UsersOrderView key={order.id} orderId={order.id} />
            : ''
        ))}
      </div>
    </div>
  );
}
