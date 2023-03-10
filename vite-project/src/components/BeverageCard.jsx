import { supabase } from "../config/supabase";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Image, Row, Card } from "react-bootstrap";

const BeverageCard = () => {
  const [beverages, setBeverages] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBeveragesData();
  }, []);

  const fetchBeveragesData = async () => {
    const { data, error } = await supabase.from("beverage").select("*");

    if (error) {
      setError("Have a error when fetching data");
    }
    if (data) {
      setBeverages(data);
    }
  };

  return (
    <div style={{height:'1000px',backgroundColor: " #1a2327"}}>
      <Row
        className="g-8 d-flex "
        style={{
          width: "1100px",
          margin: "0 auto",
          height: '600px'
        }}
      >
        {beverages.map((beverage) => {
          return (
            <Col
              className="col-6 d-flex flex-column justify-content-center align-items-center "
              style={{
                overflow: "hidden",
                width: "20%",
                marginTop: "20px",
                height:'300px'
              }}
              key={beverage.id}
            >
              <Card.Title>{beverage.name}</Card.Title>
              <Image
                thumbnail
                variant="top"
                className="beverage-image"
                src={beverage.image}
                alt=""
              />
            </Col>
          );
        })}
        {error ?? <Card.Text>{error}</Card.Text>}
      </Row>
    </div>
  );
};

export default BeverageCard;
