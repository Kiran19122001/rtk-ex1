import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/cartSlice";
import { getProducts } from "../../store/productSlice";
import "./index.css";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  // console.log(products);
  useEffect(() => {
    //dispatch fetch products
    dispatch(getProducts());
  }, []);
  if (status === "loading") {
    return <div>Loading......</div>;
  }
  const addToCart = (product) => {
    //dispathc the add product
    dispatch(add(product));
  };
  const cards = products.map((product) => (
    <div className="col-md-3 mb-5" key={product.id}>
      <Card style={{ width: "18rem" }} className="h-100">
        <div className="text-center p-1">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "130px", width: "100px" }}
          />

          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR.{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "#fff" }}>
            <Button
              variant="primary"
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1 className="head">Products</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Products;
