import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
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
