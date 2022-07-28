// import { Order } from './components/Order';
import { UsersOrderView } from './components/UsersOrderView';

import { useState, useEffect } from 'react';

function App() {
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
  }, [ orders ]);

  return (
    <div className='main'>
      <div className='orders__not-done'>
        <h2 className='orders__not-done-header'>Готовятся</h2>

        { orders.map(order => (
          !order.is_done ?
            <UsersOrderView key={order.id} orderId={order.id} />
          : ''
        )) }
      </div>
      <div className='orders__done'>
        <h2 className='orders__done-header'>Готовы</h2>

        { orders.map(order => (
          order.is_done ?
            <UsersOrderView key={order.id} orderId={order.id} />
          : ''
        )) }
      </div>
    </div>
  );
}

export default App;
