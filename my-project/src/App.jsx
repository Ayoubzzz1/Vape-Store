import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";

import Footer from "./components/Footer";
import './index.css'
import vape1banner from "./assets/vape1banner.jpg";
import bannervape from "./assets/bannervape.webp";
import libanner from "./assets/libanner.jpg"
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";

export default function () {
  
  return(

<main className="text-tertairy">
<BrowserRouter>
<Header></Header>
<Routes>

<Route path="/adminpanel" element={<AdminPanel/>}/>
<Route path="/" element={<Home/>} />
<Route path="/vape" element={<Category category={"vape"} banner={bannervape} />} />
<Route path="/Liquide" element={<Category  category={"Liquide"} banner={libanner} />} />
<Route path="/accessoire" element={<Category category={"accessoire"} banner={vape1banner}/>} />
<Route path="/login" element={<Login/>}/>

{/*<Route path="/cart-page" element={<Cart/>} />
<Route path="/login" element={<Login/>} />*/}
</Routes>
<Footer/>

</BrowserRouter>
</main>

  );
}
