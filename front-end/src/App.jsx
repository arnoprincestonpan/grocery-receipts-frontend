import './App.css'
import receiptData from './data/receipts.json';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'

function App() {
  const [viewReceipts, setViewReceipts] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  return (
    <>
      <div className="container">
        {/* Title & Menu */}
        <div className="container border-bottom">
          <h1>Grocery Receipts</h1>
          {/* Buttons Section */}
          <div className="mb-2">
            <div className="d-flex justify-content-between gap-2">
              <Button className="w-25" variant="success">
                Add
              </Button>
              <Button className="w-25" variant="info">
                View
              </Button>
              <Button className="w-25" variant="warning">
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

        {/* Delete Modal */}

        {showDeleteModal && 
            <h1>HEY</h1>
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
