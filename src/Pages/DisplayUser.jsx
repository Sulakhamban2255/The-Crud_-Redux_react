import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEdit, faEnvelope, faHome, faPhone, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteUser, updateUser } from "../Redux/crudSlice";

function DisplayUser() {
  const users = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    id: "",
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    message: "",
  });

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setUpdatedUser(user);
    setShowModal(true);
  };

  const handleUpdateUser = () => {
    dispatch(updateUser(updatedUser));
    setShowModal(false);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-primary">User List</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <ListGroup variant="flush">
            {users.map((user, index) => (
              <ListGroup.Item
                key={index}
                className="user-list-item d-flex flex-column align-items-start"
              >
                <div className="w-100">
                  <h5 className="mb-2 text-primary">{user.name}</h5>
                  <p className="text-muted mb-2">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    {user.email}
                  </p>
                  <p className="mb-2">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    <strong>Phone:</strong> {user.phonenumber}
                  </p>
                  <p className="mb-2">
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    <strong>Address:</strong> {user.address}
                  </p>
                  <p className="mb-4">
                    <FontAwesomeIcon icon={faComment} className="me-2" />
                    <strong>Message:</strong> {user.message}
                  </p>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="info"
                      className="me-2 user-action-btn"
                      onClick={() => handleShowModal(user)}
                    >
                      <FontAwesomeIcon icon={faEdit} /> Update
                    </Button>
                    <Button
                      variant="danger"
                      className="user-action-btn"
                      onClick={() => {
                        dispatch(deleteUser(user.id));
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} /> Delete
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={updatedUser.name}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={updatedUser.email}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={updatedUser.phonenumber}
                onChange={(e) =>
                  setUpdatedUser({
                    ...updatedUser,
                    phonenumber: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formAddress" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={updatedUser.address}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, address: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                value={updatedUser.message}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, message: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .user-list-item {
          background-color: #ffffff;
          padding: 1.5rem;
          border: 1px solid #dee2e6;
          border-radius: 0.375rem;
          box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .user-list-item:hover {
          transform: translateY(-0.25rem);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .user-action-btn {
          transition: all 0.3s ease;
          border-radius: 50px;
          padding: 0.5rem 1.5rem;
        }

        .user-action-btn:hover {
          background-color: #004085;
        }

        .modal-header {
          border-bottom: none;
        }
      `}</style>
    </Container>
  );
}

export default DisplayUser;
