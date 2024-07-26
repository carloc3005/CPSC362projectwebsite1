
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Sell from './Pages/Sell';
import About from './Pages/About';
import Product from './Pages/Product';
import { Knives } from './Pages/Knives';
import Footer from './Components/Footer/Footer';
import bayonetbanner from './Components/Assets/Banners/bayonetbanner.png';
import bowiebanner from './Components/Assets/Banners/bowieknifebanner.png';
import Signup from './Pages/Signup';
import SearchedKnives from './Pages/searchedknives';
import { UserProvider, useUser } from './Context/UserContext';
import GuestProfile from './Pages/GuestProfile';
import AdminProfile from './Pages/AdminProfile';
import Checkout from './Pages/Checkout';
import Confirmation from './Pages/Confirmation';

function App() {
  return (
    <div>
      <BrowserRouter> 
      <Navbar />
      <UserProvider>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/knives' element={<Knives/>}/>
        <Route path='/bayonet' element={<ShopCategory banner={bayonetbanner}category = 'bayonet'/>}/>
        <Route path='/bowieknife' element={<ShopCategory banner={bowiebanner}category = 'bowieknife'/>}/>
        <Route path='/butterflyknife' element={<ShopCategory category = 'butterflyknife'/>}/>
        <Route path='/classicknife' element={<ShopCategory category = 'classicknife'/>}/>
        <Route path='/falchionknife' element={<ShopCategory category = 'falchionknife'/>}/>
        <Route path='/flipknife' element={<ShopCategory category = 'flipknife'/>}/>
        <Route path='/gutknife' element={<ShopCategory category = 'gutknife'/>}/>
        <Route path='/huntsmanknife' element={<ShopCategory category = 'huntsmanknife'/>}/>
        <Route path='/karambit' element={<ShopCategory category = 'karambit'/>}/>
        <Route path='/kukriknife' element={<ShopCategory category = 'kukriknife'/>}/>
        <Route path='/m9bayonet' element={<ShopCategory category = 'm9bayonet'/>}/>
        <Route path='/navajaknife' element={<ShopCategory category = 'navajaknife'/>}/>
        <Route path='/nomadknife' element={<ShopCategory category = 'nomadknife'/>}/>
        <Route path='/paracordknife' element={<ShopCategory category = 'paracordknife'/>}/>
        <Route path='/shadowdaggers' element={<ShopCategory category = 'shadowdaggers'/>}/>
        <Route path='/skeletonknife' element={<ShopCategory category = 'skeletonknife'/>}/>
        <Route path='/stilettoknife' element={<ShopCategory category = 'stilettoknife'/>}/>
        <Route path='/survivalknife' element={<ShopCategory category = 'survivalknife'/>}/>
        <Route path='/talonknife' element={<ShopCategory category = 'talonknife'/>}/>
        <Route path='/ursusknife' element={<ShopCategory category = 'ursusknife'/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/confirmation' element={<Confirmation/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/search" element={<SearchedKnives />} />

        
            <Route path="/admin" component={AdminRoute} element={<AdminProfile/>}/>
            <Route path="/guest" component={GuestRoute} element={<GuestProfile/>}/>
            <Route path="login" component={Loginsignup} element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}
const AdminRoute = () => {
  const { user } = useUser();

  if (!user) {
    return <Link to="/" />;
  }

  if (user.role !== 'admin') {
    return <Link to="/admin" />;
  }

  return <AdminProfile />;
};

const GuestRoute = () => {
  const { user } = useUser();

  if (!user) {
    return <Link to="/" />;
  }

  if (user.role !== 'guest') {
    return <Link to="guest" />;
  }

  return <GuestProfile />;
};

export default App;