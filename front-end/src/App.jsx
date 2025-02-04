import './App.css'
import { useState } from 'react';
// we need to use this to manage the state of our: receipts, modal visiblity and form inputs
import { Modal, Button, Form } from 'react-bootstrap';
// we need modal for pop-ups, Button to trigger modal or submitting forms, form to be inside the modal

function App() {
  // State to manage Receipts
  const [receipts, setReceipts] = useState([]);

  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  // State to handle form input for receipt name and date
  const [receiptName, setReceiptName] = useState('');
  const [receptDate, setReceiptDate] = useState('');

  return (
    <>
      <h1>Grocery Receipts</h1>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Add Receipt
      </Button>
    </>
  )
}

export default App
