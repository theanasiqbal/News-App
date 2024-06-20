import React from 'react';

const Card = ({ image, title, description, url }) => {

  const ReadMore = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-1/5 bg-white shadow-md rounded-lg overflow-auto">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-l font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={ReadMore}>
          Read More..
        </button>
      </div>
    </div>
  );
};

export default Card;
