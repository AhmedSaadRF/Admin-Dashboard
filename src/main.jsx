import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css'
import App from './App';
import Dashboard from './Page/dashboard/Dashboard';
import Team from './Page/team/Team';
import Contacts from './Page/contacts/Contacts';
import Invoices from './Page/invoices/Invoices';
import Form from './Page/form/Form';
import Calendar from './Page/calendar/Calendar';
import FAQ from './Page/faq/FAQ';
import Bar from './Page/bar/Bar';
import Pie from './Page/pie/Pie';
import Line from './Page/line/Line';
import Geography from './Page/geography/Geography';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geography />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
