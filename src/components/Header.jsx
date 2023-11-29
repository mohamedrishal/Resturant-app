import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from "react-redux";
import { searchRestuarant } from "../redux/restuarantSlice";

function Header() {
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home" className="fs-4 fw-bold text-white">
          <i class="fa-solid fa-utensils me-3"></i>
          Food Court
          </Navbar.Brand>
          <div className="d-flex ms-auto align-items-center">
            <input  onChange={(e)=>dispatch(searchRestuarant(e.target.value))} type="text" className="form-control" placeholder="Search Restuarant" />
            <i style={{marginLeft:"-20px"}} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
