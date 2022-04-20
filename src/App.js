import './App.css';
import React, { useState, useEffect } from 'react';
import Components from './components/Components';
import Registration from './components/registration/Registration';
import { useAuth } from './Firebase.js';
import ClockLoader from "react-spinners/ClockLoader";


function App() {
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='App'>
      {
        loading ?
        <div className='appi'>
        <ClockLoader
          size={100}
          className = 'loader'
          color={'#1778F2'}
          loading={loading} />
        </div>
          : (!currentUser && <Registration />) || (currentUser && <Components />)
      }

      {
        
      }
      
      {/* {!currentUser && <Registration />}
        {currentUser && <Components />} */}
    </div>
  )
}

export default App;
