import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Home,Admin, Productlist, ProductDetail, Contact, ContactIn, ContactEu, ContactUs, PageNotFound} from '../Pages';


export const AllRoutes = () => {
  const dev=true; 
  return (
    <main>
          
        <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='products' element={<Productlist/>}/>
              <Route path='products/1001' element={<ProductDetail/>}/>
              <Route path='contact' element={<Contact/>}>
                  <Route path='in' element={<ContactIn/>}/>
                  <Route path='eu' element={<ContactEu/>}/>
                  <Route path='us' element={<ContactUs/>}/>
              </Route>
              <Route path='/admin' element={dev?<Admin/>:<Navigate to='/'/>} />
              <Route path='*' element={<PageNotFound/>}/>
            </Routes>
          
    </main>
  )
}

