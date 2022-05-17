import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/StyledNavbar";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "10px" }}>FRIEZE NEW YORK LG OLED LOUNGE</h1>
      <hr style={{ borderTop: "1px solid black" }}></hr>
      <Navbar></Navbar>
      <hr style={{ borderTop: "1px solid black" }}></hr>
      <Outlet />
    </div>
  );
}
