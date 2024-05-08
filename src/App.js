import { Route,Routes } from 'react-router-dom';
import { useEffect,createContext, useState } from 'react';
import app from './FireBase/FireBase';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import './App.css';
import React from 'react';
import Homepage from './Pages/Homepage/Homepage';
import Bookspage from './Pages/Bookspage/Bookspage';
import Detailspage from './Pages/DetailPage/Detailspage';
import Signup from './Pages/Signuppage/Signuppage';
import Login from './Pages/Loginpage/Loginpage';
import Cartpage from './Pages/Cartpage/Cartpage';
import Scroll from './Components/Scrollissue/Scrollissue';
import Searchpage from './Pages/Searchpage/Searchpage';
const UserContext = createContext({});
const  CartContext = createContext({})

const App=()=>{
  const auth=getAuth(app);
  const [authenticated,Setauthenticated]=useState(null)
  const [cartItems,SetcartItems]=useState([])
  const [totalAmount,SettotalAmount]=useState(0)


  useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if(user){
        Setauthenticated(user)
      }else{
        Setauthenticated(null)

      }

    })
  },[auth])


  useEffect(()=>{
    let total =0;
    cartItems.forEach((item)=>{
      total= total+ parseInt(item.price)
    })
    SettotalAmount(total)

  },[cartItems])



  return(
    <Scroll>
    <UserContext.Provider value = {authenticated}>
      <CartContext.Provider value={{cartItems,totalAmount, SetcartItems}}>
      <Routes>
      <Route path= "" element={<Homepage/>} />
      <Route path="/books" element={<Bookspage/>} />
      <Route path="/details/:id"element ={ <Detailspage/>}/>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/search" element={<Searchpage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={<Cartpage/>}></Route>
      </Routes>
      </CartContext.Provider>
    </UserContext.Provider>
    </Scroll>
  )





}

export default App;
export {UserContext};
export {CartContext}