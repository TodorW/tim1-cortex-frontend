import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import MyProfile from "./components/profile/MyProfile";
import EditProfile from "./components/profile/EditProfile";
import Home from "./components/home/Home";
import ReservationRate from "./components/reservation-rate/ReservationRate";
import Car from "./components/single-car/Car";
import ReserveCar from "./components/reserve-car/ReserveCar";
import Dashboard from "./components/dashboard/Dashboard";
import ReservationStatus from "./components/status/ReservationStatus";
import EditReservation from "./components/edit-reservation/EditReservation";
import CancelReservation from "./components/reservation-cancel/ReservationCancel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/car/:id" element={<Car />} />
        <Route path="/car-reserve/:id" element={<ReserveCar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reservation/rate/:id" element={<ReservationRate />} />
        <Route path="/reservation/status/:id" element={<ReservationStatus />} />
        <Route path="/reservation/edit/:id" element={<EditReservation />} />
        <Route path="/reservation/cancel/:id" element={<CancelReservation />} />
      </Routes>
    </Router>
  );
}

export default App;
