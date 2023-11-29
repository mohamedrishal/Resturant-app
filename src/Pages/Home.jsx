import React, { useEffect } from "react";
import { Col, Row ,Spinner } from "react-bootstrap";
import RestCard from "../components/RestCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestuarant } from "../redux/restuarantSlice";

function Home() {

  // state => useselector use chayythe slice nn get chayyya
  const {allRestuarant,loading,error} = useSelector(
    (state) => state.restuarantSlice
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestuarant());
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5 w-100">
        {
          loading && error ?
          <div>
                <Spinner animation="border" variant="dark" /><span>Loading...</span>
          </div> 
          :
          <div><span>{error}</span></div>
        }
      </div>

      <Row className="mt-5">
        { !loading && allRestuarant?.length > 0
          ? allRestuarant.map((restauarnt) => (
              <Col className="px-5 py-3" sm={12} md={6} lg={4} xl={3}>
                <RestCard restauarnt={restauarnt} />
              </Col>
            ))
          : (
            <div className="d-flex justify-content-center align-items-center"><span>No Hotel Available</span></div>
          )}
      </Row>
    </>
  );
}

export default Home;
