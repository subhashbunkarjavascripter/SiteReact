import React from 'react';
import BookCard from './BookCard';

const Showbooks = ({ books  }) => {
  return (
    <div className='w-full grid grid-cols-4 gap-8 mt-10'>
      {books.map((boook) => {
        return <BookCard key={boook.id} title={boook.volumeInfo.title}  image={boook.volumeInfo.imageLinks?.thumbnail || 'default-image-url.jpg'} discription={boook.volumeInfo.description} authors={boook.volumeInfo.authors ? boook.volumeInfo.authors.join(', ') : 'Unknown Author'}  />;
      })}
    </div>
  );
};

export default Showbooks;
