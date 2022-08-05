import React, { useState, useEffect } from 'react';

export const OrderDetail = ({ orderId, isDone, orderDishes }) => {
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


  const getOrderPrice = (orderDishes, dishes) => {
    console.log(orderDishes);
    console.log(dishes);
    let totalPrice;
    orderDishes.map(orderDish => (
      dishes.map(dish => (
        dish.id === orderDish.dish ?
          totalPrice += parseFloat(dish.price)
        : 1
      ))
    ));
    console.log(totalPrice)
  }

  let orderPrice = getOrderPrice(orderDishes, dishes);

  return (
    <div className='order-detail'>
      <h2 className='order-detail__number'>{orderId}</h2>
      <p className='order-detail__status'>
        {isDone ? 'Готов' : 'Готовится'}
      </p>
      <ul className='order-detail__dishes'>
        {orderDishes.map(orderDish => (
          dishes.map(dish => (
            dish.id === orderDish.dish ?
              <li key={dish.id}>
                {dish.name} {orderDish.quantity}x {dish.price*orderDish.quantity}
              </li>
              : ''
          ))
        ))}
      </ul>
      {/* <p className='order-detail__price'>{orderPrice}</p> */}
    </div>
  )
}
