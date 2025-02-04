import './App.css'
import receiptData from './data/receipts.json';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container mt-4">
        <h1>Grocery Receipts</h1>
        {receiptData.map((receipt, index) => (
          <div key={index} className="card my-3">
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
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Item(s) Before Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {receipt.items.map((item, itemIndex) => (
                      <tr key={itemIndex}>
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
