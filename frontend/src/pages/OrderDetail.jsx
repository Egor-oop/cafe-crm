import React from 'react';
import { useParams } from 'react-router-dom';

export const OrderDetail = () => {
  let { orderId } = useParams();
  

  return (
    <div>{ orderId }</div>
  )
}
