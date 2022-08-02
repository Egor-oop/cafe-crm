import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import { OrdersStatuses } from './pages/OrdersStatuses';
import { OrdersStaffView } from './pages/OrdersStaffView';
import { OrderDetail } from './pages/OrderDetail';
import { NotFoundPage } from './pages/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='orders-users' element={<OrdersStatuses />} />
      <Route path='orders-staff' element={<OrdersStaffView />} />

      <Route path='orders-staff/:orderId' element={<OrderDetail />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);