  import { useEffect, useState } from 'react';
  import Search from './Search';
  import Showbooks from '../partials/Showbooks';
  import { useDispatch,useSelector } from 'react-redux';
  import { store } from '../../store/store';
  import { loadBooks } from '../../store/Action/BookAction';
  import DetailLayout from '../details/DetailLayout';

  
  const Layout = () => {
    const [query, setQuery] = useState('');
    const {books} = useSelector(store => store.BookSlice)
    const dispatch = useDispatch();
    console.log(books)
    
    
    
    useEffect(() => {
     if (books.length === 0) dispatch(loadBooks());
    }, [])
    
    return (
      <>
        <div className="w-full h-full">
          <Search query={query} setQuery={setQuery}/>
          <Showbooks books = {books} />
        </div>
      </>
    );
  }

  export default Layout;
