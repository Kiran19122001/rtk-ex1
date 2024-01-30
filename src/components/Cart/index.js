import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";

const Cart = () => {
  const productItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (product) => {
    dispatch(remove(product.id));
  };

  return (
    <div>
      {productItem.map((item) => (
        <Card style={{ width: "18rem" }} className="h-100">
          <div className="text-center p-1">
            <Card.Img
              variant="top"
              src={item.image}
              style={{ height: "130px", width: "100px" }}
            />

            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>INR.{item.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ background: "#fff" }}>
              <Button
                variant="primary"
                className="btn btn-primary"
                onClick={() => removeItem(item)}
              >
                Remove item
              </Button>
            </Card.Footer>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
