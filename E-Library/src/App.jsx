 import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Approutes from './routes/Approutes';
import Nav from './components/partials/Nav';
import Search from './components/home/Search';
import { store } from './store/store';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './store/reducers/BookSlice';
import { Provider } from "react-redux";


 const App = () => {
   return (
    <>
    <div className="w-full h-max bg-rose-50">
      <Provider store={store}>
      <BrowserRouter>
       <Nav/>
        <Approutes/>      
      </BrowserRouter> 
      </Provider>
    </div>
    </>
   )
 }
 
 export default App