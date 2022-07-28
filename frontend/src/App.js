import { Order } from './components/Order';

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
    .then((actualData) => setOrder(actualData));
  }, []);

  return (
    <div>
      { orders.map(order => (
        <Order key={order.id} orderId={order.id} isDone={order.isDone} orderDishes={order.dishes} />
      )) }
    </div>
  );
}

export default App;
