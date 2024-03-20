import Admindashboard from "./components/Admin/Admindashboard";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Userdash from "./components/User/Userdash";
import {Routes,Route} from 'react-router-dom';
import Signup from "./components/Signup";
import Booking from "./components/Booking";
import Payment from "./components/Payment";
import { Suspense, lazy } from "react";
import UserProfile from "./components/UserProfile";
import AddServices from "./components/Sidebar/AddService";
import Features from "./components/Admin";
export default function App() {
  const Login = lazy(() =>  import("./components/Login"));
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userdash" element={<Userdash />} />
      <Route path="/admin" element={<Admindashboard />} />
      <Route path="/login" element={
        <Suspense fallback={"Loading..."}>
          <Login />
        </Suspense>
      } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/up" element={<UserProfile />}/>
      <Route path="/booking" element={<Booking />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/as" element={<AddServices />} />
      <Route path="/en" element={<Features    />} />
      </Routes>
    <Footer />
    </>
  );
}