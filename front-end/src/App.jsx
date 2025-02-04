import './App.css'
import receiptData from './data/receipts.json';

function App() {
  return (
    <>
      <h1>Grocery Receipts</h1>
      <ul>
        {receiptData.map((receipt, index) => (
          <li key={index}>
            <h2>Receipt # {receipt.receiptNumber}</h2>
            <p>Date: {receipt.date}</p>
            <ul>
              {receipt.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.name} - {item.quantity} x ${item.price} - ${(item.quantity * item.price).toFixed(2)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
