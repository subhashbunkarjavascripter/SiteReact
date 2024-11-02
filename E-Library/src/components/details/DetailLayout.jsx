import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailLayout = () => {
  const { title } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.items) {
          setBookDetails(data.items[0].volumeInfo);
        } else {
          setError('No book found');
        }
      })
      .catch(error => {
        setError('Error fetching book details: ' + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [title]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  const { title: bookTitle, authors, description, imageLinks } = bookDetails;
  const bookImage = imageLinks ? imageLinks.thumbnail : 'default-image-url.jpg';

  return (
    <div className='px-12 w-full flex flex-col' style={{ minHeight: '100vh' }}>
      <div className="img m-auto mt-8 rounded-lg h-96 w-2/4 relative">
        <img className='w-full h-full rounded-lg' src={bookImage} alt={bookTitle} />
      </div>
      <h1 className='text-4xl font-bold mt-2 '>{bookTitle}</h1>
      <h2 className='font-bold text-lg mt-2'>Authors: {authors ? authors.join(', ') : 'Unknown'}</h2>
      <p className='font-normal mt-2'>{description || "No description available."}</p>
    </div>
  );
};

export default DetailLayout;
