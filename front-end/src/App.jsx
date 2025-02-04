import './App.css'
import receiptData from './data/receipts.json';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function addReceipt(){
  console.log("Add Receipt");

}


function App() {

  const [viewReceipts, setViewReceipts] = useState(false);

  return (
    <>
      <div className="container">
        
        {/* Title & Menu */}
        <div className="container border-bottom">
          <h1>Grocery Receipts</h1>
          {/* Buttons Section */}
          <div className="mb-2">
            <div className="d-flex justify-content-between gap-2">
              <button className="btn btn-success w-25">
                Add
              </button>
              <button className="btn btn-info w-25">
                View
              </button>
              <button className="btn btn-warning w-25">
                Edit
              </button>
              <button className="btn btn-danger w-25">
                Delete
              </button>
            </div>
            <button className="btn btn-primary btn-lg w-100 my-2" onClick={() => setViewReceipts(!viewReceipts)}>
              View All
            </button>
          </div>
        </div>

        {/* Receipts Section */}

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
                      <th>Price</th>
                      <th>Item(s) Before Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {receipt.items.map((item, itemIndex) => (
                      <tr key={itemIndex}>
                        <td>{++itemIndex}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
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
