import './App.css'
import receiptData from './data/receipts.json';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'

function App() {
  const [viewReceipts, setViewReceipts] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Delete Modal States
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");

  return (
    <>
      <div className="container">
        {/* Title & Menu */}
        <div className="container border-bottom">
          <h1>Grocery Receipts</h1>
          {/* Buttons Section */}
          <div className="mb-2">
            <div className="d-flex justify-content-between gap-2">
              <Button className="w-25" variant="success" onClick={() => setShowAddModal(!showAddModal)}>
                Add
              </Button>
              <Button className="w-25" variant="info" onClick={() => setShowViewModal(!showViewModal)}>
                View
              </Button>
              <Button className="w-25" variant="warning" onClick={() => setShowEditModal(!showEditModal)}>
                Edit
              </Button>
              <Button className="w-25" variant="danger" onClick={() => setShowDeleteModal(!showDeleteModal)}>
                Delete
              </Button>
            </div>
            <Button variant="primary" className="w-100 my-2" onClick={() => setViewReceipts(!viewReceipts)}>
              View All
            </Button>
          </div>
        </div>

        {/* Add Modal */}

        {showAddModal && 
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Add Receipt</Modal.Title>
                <Modal.Body>
                  
                </Modal.Body>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="danger" onClick={() => setShowAddModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        }

        {/* View Modal */}

        {showViewModal && 
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>View Receipt</Modal.Title>
                <Modal.Body>
                  
                </Modal.Body>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="danger" onClick={() => setShowViewModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        }

        {/* Edit Modal */}

        {showEditModal && 
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Receipt</Modal.Title>
                <Modal.Body>
                  
                </Modal.Body>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="danger" onClick={() => setShowEditModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        }

        {/* Delete Modal */}

        {showDeleteModal && 
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Receipt</Modal.Title>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>Receipt Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Receipt Number"
                        value={receiptNumber}
                        onChange={(e) => setReceiptNumber(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="danger" onClick={() => setShowDeleteModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        }

        {/* Receipts */}

        {viewReceipts && receiptData.map((receipt, index) => (
          <div key={index} className="card my-2">
            <div className="card-body">
              <h2 className="card-title">
                Receipt #: {receipt.receiptNumber}
              </h2>
              <p className="card-body">
                Date: {receipt.date}
                </p>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Item #</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>&nbsp;</th>
                      <th>Price</th>
                      <th>&nbsp;</th>
                      <th>Item(s) Before Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {receipt.items.map((item, itemIndex) => (
                      <tr key={itemIndex}>
                        <td>{++itemIndex}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>x</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>=</td>
                        <td className="d-flex justify-content-end">${(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="container">
                    <div className="row">
                      <div className="col">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Total P.S.T.:
                          </li>
                          <li className="list-group-item">
                            Total G.S.T.:
                          </li>
                          <li className="list-group-item">
                            Total Before Taxes:
                          </li>
                          <li className="list-group-item">
                            <strong>Total After Taxes:</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            ${receipt.totalPST.toFixed(2)}
                          </li>
                          <li className="list-group-item">
                            ${receipt.totalGST.toFixed(2)}
                          </li>
                          <li className="list-group-item">
                            ${receipt.totalBeforeTax.toFixed(2)}
                          </li>
                          <li className="list-group-item">
                            <strong>${receipt.totalAfterTax.toFixed(2)}</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
