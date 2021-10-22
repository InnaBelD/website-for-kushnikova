import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/nav_bar/nav-bar';
import New from './components/new/new';
import Catalog from './pages/catalog/catalog.jsx';
import Delivery from './pages/delivery/delivery';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';
import Login from './pages/login/login';
import Acc from './pages/account/account';
import Like from './pages/like/like';
import Basket from './pages/basket/basket';
import OneCardCreate from './pages/one_card/one_card_create';

function App() {
  return (
    <BrowserRouter> 
    <div className="App"> 
     <Navbar/>
     
     <main className='main'>
     <Switch>
    <Route exact path="/"> 
     <New/>
     </Route>
     <Route path="/Catalog" component={Catalog}/> 
     <Route path="/Delivery" component={Delivery}/> 
     <Route path="/Aut/Login" component={Login}/> 
     <Route path="/Acc" component={Acc}/> 
     <Route path="/Like" component={Like}/> 
     <Route path="/Basket" component={Basket}/> 
     <Route path="/OneCardCreate" component={OneCardCreate}/> 
     </Switch>
    </main> 
    
     <Footer /> 
    </div>
    </BrowserRouter>
  );
}

export default App;
