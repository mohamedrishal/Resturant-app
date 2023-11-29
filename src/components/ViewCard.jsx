import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Modal from "react-bootstrap/Modal";

function ViewCard() {
  const { id } = useParams();
  const { allRestuarant } = useSelector((state) => state.restuarantSlice);
  const [restauarnt, setRestauarnt] = useState({});

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setRestauarnt(allRestuarant.find((item) => item.id == id));
  }, []);
  console.log(restauarnt);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { reviews, operating_hours } = restauarnt;

  return (
    <div>
      <div style={{backgroundColor:"#2c3e50",border:"1px solid white"}} className="d-flex">
        <div className="">
          <img style={{ width: "80vh" }} src={restauarnt.photograph} alt="" />
        </div>
        <div className=" py-5 ps-5 text-white w-100">
          <div
            style={{ backgroundColor: "#6d7a86d4" }}
            className=" rounded mb-4 p-3"
          >
           <p className="mb-4">
              <h1 className="fw-bolder">{restauarnt.name}</h1>
              <p className="fw-bold m">{restauarnt.neighborhood}</p>
           </p>
            <p className="fw-bold">{restauarnt.cuisine_type}</p>
            <p className="fw-bold">Address : {restauarnt.address}</p>
          </div>
          <div className="col flex">
            {/* Modal */}
            <div>
              <Button variant="primary btn-dark" onClick={handleShow}>
              Operating Hours
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {operating_hours && Object.keys(operating_hours).length > 0 && ( 
                    <ul>
                      <li className="mt-3 fw-bold  ">Monday:  {operating_hours.Monday}</li>
                      <li className="mt-3 fw-bold  ">Tuesday:  {operating_hours.Tuesday}</li>
                      <li className="mt-3 fw-bold  ">Wednesday:  {operating_hours.Wednesday}</li>
                      <li className="mt-3 fw-bold  ">Thursday:  {operating_hours.Thursday}</li>
                      <li className="mt-3 fw-bold  ">Friday:  {operating_hours.Friday}</li>
                      <li className="mt-3 fw-bold  ">Saturday:  {operating_hours.Saturday}</li>
                      <li className="mt-3 fw-bold  ">Sunday:  {operating_hours.Sunday}</li>
                    </ul>
                  )}
                </Modal.Body>
              </Modal>
            </div>

            {/* collapse */}
            <div className="mt-3">
              <Button
               className="btn-dark"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Click here to view the review
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  {reviews && reviews.length > 0 ? (
                    reviews.map((item,index) => (
                      <div key={index} className="mt-3">
                        <h5 className="fw-bolder">
                          {item.name} : ({item.date} )
                        </h5>
                        <p className="fw-bold">Rating: {item.rating}</p>
                        <p className="">Comments:  {item.comments}</p>
                      </div>
                    ))
                  ) : (
                    <p>No reviews available</p>
                  )}
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCard;
