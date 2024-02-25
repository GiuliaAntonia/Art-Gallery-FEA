
import React from 'react'

const Painting = ({ title, price, imageUrl }) => {
    return (
      <div className="bg-white border p-4 m-4 text-center flex flex-col items-center">
        <img src={imageUrl} alt={title} className="w-64 h-64 object-cover" />
        <h2 className="text-lg font-semibold my-2">{title}</h2>
        <p className="font-bold text-green-700">${price}</p>
      </div>
    );
  };

export default Painting
