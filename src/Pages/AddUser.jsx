import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Card,
  FloatingLabel,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/crudSlice";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

function AddUser() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    message: "",
  });
 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userDetails));
    navigate("/display");
  };
  console.log("Added User" , userDetails)

  return (
    <Container className="mt-2 d-flex justify-content-center">
      <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 text-primary">User Details</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <FloatingLabel controlId="formName" label="Name" className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="shadow-sm"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col md={12}>
              <FloatingLabel
                controlId="formEmail"
                label="Email Address"
                className="mb-4"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="shadow-sm"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FloatingLabel
                controlId="formPhone"
                label="Phone Number"
                className="mb-4"
              >
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  className="shadow-sm"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      phonenumber: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col md={12}>
              <FloatingLabel
                controlId="formAddress"
                label="Address"
                className="mb-4"
              >
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Enter your address"
                  name="address"
                  className="shadow-sm"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, address: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>

          <FloatingLabel
            controlId="formMessage"
            label="Message"
            className="mb-4"
          >
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              name="message"
              className="shadow-sm"
              onChange={(e) =>
                setUserDetails({ ...userDetails, message: e.target.value })
              }
            />
          </FloatingLabel>

          <div className="text-center">
            <Button variant="primary" type="submit" className="px-5 shadow-sm">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default AddUser;
