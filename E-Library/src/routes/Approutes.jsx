import React from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import App from '../App';
import Layout from "../components/home/Layout"
import Search from '../components/home/Search';
import DetailLayout from '../components/details/DetailLayout';

const Approutes = () => {
  return (

   <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/detail/:title" element={<DetailLayout />} />
   </Routes>
  )

}


export default Approutes