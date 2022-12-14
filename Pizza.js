import React, { useState } from "react";
import { Modal } from "react-bootstrap";
export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varients, setvarients] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ margin: "70px" }}
      className=" shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={"handleshow"}>
        <h1> {pizza.name} </h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form control"
            value={"varietn"}
            onChange={(e) => {
              setvarients(e.target.value);
            }}
          >
            {pizza.varients.map((varients) => {
              return <option value={varients}></option>;
            })}
          </select>
        </div>

        <diV className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {})}
            return <option value={"i" + 1}> {"i" + 1}</option>
          </select>
        </diV>
      </div>

      <div className="flex-container">
        <div>
          <h1 className="m-1">
            Price:{pizza.prices[0][varients] * quantity}RS/=
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">ADD TO CART</button>
         </div>
       </div> 

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>pizza.name</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image}className="img-fluid" style={{height:'400px'}}/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={"handleclose"}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>  
     </div> 
  );
}
