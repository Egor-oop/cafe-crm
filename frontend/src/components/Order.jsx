import React, { useState, useEffect } from 'react'

export const Order = ({orderId, isDone, orderDishes}) => {
  return (
    <div className='Order'>
      <p>{ orderId }</p>
      <p>{ isDone ? 'Готов' : 'Готовится' }</p>
      <p>{ orderDishes.map(dish => (
        dish
      )) }</p>
    </div>
  )
}
