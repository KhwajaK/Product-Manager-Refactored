import React from 'react';
import './App.css';
// import axios from 'axios';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './view/Main';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route element={<Main />} path="/home" default />
                <Route element={<Navigate to ="/home" />} path="/" />
                <Route element={<ProductDetails />} path="/products/:id" />
                <Route element={<UpdateProduct/>} path="/products/edit/:id" />
            </Routes>
        </BrowserRouter>

    </div>
    );
}

export default App;