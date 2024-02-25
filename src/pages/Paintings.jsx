
import React from 'react';
import {Navbar} from '../components/Navbar';
import { Footer } from '../components/Footer';
import Painting from '../components/Painting';
import img1 from './img1.png';
import img2 from './img2.png';

function Paintings() {

  const paintingsData = [
    {
      title: 'Peaceful home',
      price: 200,
      imageUrl: img1,
    },
    {
      title: 'Spring Flowers',
      price: 150,
      imageUrl: img2,
    },
  ];

  return (
    <>
      <Navbar/>
      
      <div className="bg-red-50 container mx-auto ">
          <h1 className=" text-3xl font-bold mb-8">Choose your favourite painting </h1>
          <div className='my-6'> </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paintingsData.map((painting, index) => (
                <Painting
                  key={index}
                  title={painting.title}
                  price={painting.price}
                  imageUrl={painting.imageUrl}
                />
              ))}
            </div>
          
      </div>
      <Footer />
    </>
    
  )
}

export default Paintings
