import React from 'react'

export const UsersOrderView = ({orderId}) => {
  return (
    <div className='Order'>
      <p className='orders__number'>{ orderId }</p>
    </div>
  )
}
