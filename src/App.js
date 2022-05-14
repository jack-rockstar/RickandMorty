import React, { Suspense } from 'react';
import './App.css';
import Home from './pages/Home/index'
import SearchResults from './pages/SearchImg';
import { Route, Link } from 'wouter'
import { ImgContext } from './Context/ImgContext';
import Detail from './pages/Details';
import StaticContext from './Context/StaticContext';
import Footer from 'components/Footer';

const homePage = React.lazy(() => import('./pages/Home/index'))


function App() {

  return (
    <StaticContext.Provider value={{ name: 'jack', saludos: 'a toda la people' }}>
      <div className="App">
        <Link to='/'>
          <div className='logo'>
          </div>
        </Link>
        <Suspense fallback={null}>
          <section className='app-body'>
            <ImgContext>
              <Route component={homePage} path='/'></Route>
              <Route component={SearchResults} path='/search/:keyword'></Route>
              <Route component={Detail} path='/img/:id'></Route>
            </ImgContext>
          </section>
        </Suspense>

      </div>
      <Footer></Footer>

    </StaticContext.Provider>
  );

}

export default App;
