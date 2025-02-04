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
                    </tr>
                  </thead>
                  <tbody>
                    {receipt.items.map((item, itemIndex) => (
                      <tr key={itemIndex}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
