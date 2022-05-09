
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventory from './Pages/AddInventory/AddInventory';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItem from './Pages/MyItem/MyItem';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import auth from './firebase.init';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Update from './Pages/Update/Update';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import CustomerBenefit from './Pages/CustomerBenefit/CustomerBenefit';
import DiscountOffer from './Pages/DiscountOffer/DiscountOffer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/add" element={<AddInventory></AddInventory>}></Route>
        <Route path="/manage" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/details/:id" element={
          <InventoryDetails></InventoryDetails>
        }>

        </Route>

        <Route path="/myItem" element={<MyItem></MyItem>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/customerBenefit" element={<CustomerBenefit></CustomerBenefit>}></Route>
        <Route path="/discountoffer" element={<DiscountOffer></DiscountOffer>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
