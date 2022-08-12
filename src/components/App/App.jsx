import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {

//on load, get items
useEffect(() => {
  getItems()
}, [])

//GET
const getItems = () => {
  axios.get('/items')
  .then( response => {
    setGalleryItem(response.data)
  })
  .catch(err => {
    alert('error getting Gallery Items')
    console.log(err)
  }) 
} //END GET

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryItem />
        <GalleryList />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
