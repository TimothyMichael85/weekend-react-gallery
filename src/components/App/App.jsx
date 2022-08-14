import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getImages()
  }, [])

  //GET
  const getImages = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log('GET /gallery', response.data)
        setGalleryList(response.data)
      }).catch((err) => {
        console.log('error in GET', err)
      })
  };//end GET

  //PUT
  const likeImage = (galleryItem) => {
    console.log('galleryItem.id', galleryItem.id);
    axios.put(
      (`/gallery/like/${galleryItem.id}`)
    ).then(() => {
      console.log('galleryItem.likes', galleryItem.likes)
      getImages();
    }).catch((err) => {
      alert('error in PUT', err)
    })
  };//end PUT



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">I have pets!!!!</h1>
      </header>
      <div>
        <GalleryList
          galleryList={galleryList}
          getGalleryList={getImages}
          likeImage={likeImage}
        />
      </div>
    </div>
  );
}

export default App;
