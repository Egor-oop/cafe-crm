import React, { useState, useEffect } from 'react';

export const Order = ({orderId, isDone, orderDishes}) => {
  const [dishes, setDish] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/dishes/', {
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    })
    .then((response) => response.json())
    .then((actualData) => setDish(actualData));
  }, []);

  return (
    <div className='order'>
      <h2 className='order__header'>{ orderId }</h2>
      <p className='order__status'>{ isDone ? 'Готов' : 'Готовится' }</p>

        <ul className='order__dishes'>
          { orderDishes.map(orderDish => (
            dishes.map(dish => (
              dish.id === orderDish.dish ?
              <li key={ dish.id }>
                { dish.name } { orderDish.quantity }x
              </li> 
              : ''
            ))
          )) }
        </ul>

    </div>
  )
}
