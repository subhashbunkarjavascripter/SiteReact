import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ title, discription, authors, image }) => {
  const authorsList = Array.isArray(authors) ? authors : [authors];

  return (
    <Link to={`/detail/${title}`} className="card bg-white shadow-lg transition-all cursor-pointer hover:scale-110 rounded-lg flex flex-col w-70 h-80 ml-8 p-2">
      <div className="book-img w-full p-1 overflow-hidden rounded-lg h-3/5">
        <img className='w-full h-full rounded' src={image} alt={title} />
      </div>
      <h1 className='font-bold text-lg'>{title}</h1>
      <h2 className='text-sm'>Authors: {authors}</h2>
      <div className='overflow-hidden-scroll h-20 relative'> {/* Scrollable area */}
        <p className='text-xs overflow-y-scroll h-full'>{discription || "No description available."}</p>
      </div>
      <button className='bg-zinc-900 text-white text-sm px-5 py-1 rounded mt-auto'>Download</button>
    </Link>
  );
};

export default BookCard;
