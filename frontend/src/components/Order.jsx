import React from 'react'

export const Order = ({orderId, isDone, dishes}) => {
  return (
    <div className='Order'>
      <p>{ orderId }</p>
      <p>{ isDone ? 'Готов' : 'Готовится' }</p>
      <p>{ dishes.map(dish => (
        dish
      )) }</p>
    </div>
  )
}
