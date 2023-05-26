import Header from './components/Header';
import Tabs from './components/Tabs';
import Recipe from './components/Recipe';
import './App.scss';
import { useState } from 'react';

function App() {

  const [loader, setLoader] = useState(true)
  return (
    <div className="main">
         <Header/>
         <Tabs setLoader={setLoader}/>
         <Recipe setLoader={setLoader}/>
         {loader && <div className='loader'>
            <div className='spinner'></div>
        </div>}
    </div>
  );
}

export default App;
