import React, { useState, useEffect } from 'react'

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
    <div className='Order'>
      <p>{ orderId }</p>
      <p>{ isDone ? 'Готов' : 'Готовится' }</p>
      <p>{ orderDishes.map(orderDish => (
        dishes.map(dish => (
          dish.id === orderDish ? dish.name : ''
          // if (dish.id == orderDish) {
            
          // }
        ))
      )) }</p>
    </div>
  )
}
