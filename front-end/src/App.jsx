import './App.css'
import receiptData from './data/receipts.json';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import ListOfReceiptCards from './components/ListOfReceiptCards';

function App() {
  const itemObject = {
      "name": "",
      "quantity": 0,
      "price": 0.00,
      "gstTax": 5.00,
      "pstTax": 7.00,
      "totalPriceBeforeTax": 0.00,
      "totalPriceAfterTax": 0.00
  }
  const [viewReceipts, setViewReceipts] = useState(false);
  const [myReceipts, setMyReceipts] = useState(receiptData);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Add Modal States
  const [newReceiptNumber, setNewReceiptNumber] = useState(0);
  const [newDate, setNewDate] = useState(Date.now());
  const [newItems, setNewItems] = useState([])
  const [newItem, setNewItem] = useState(
    itemObject
  );


  // Delete Modal States
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");
  const [receiptToDelete, setReceiptToDelete] = useState(null);

  const checkReceiptNumber = () => {
    const foundReceipt = myReceipts.find(receipt => receipt.receiptNumber === receiptNumber)
    if(foundReceipt){
      setReceiptToDelete(foundReceipt);
      setShowConfirmDeleteModal(true);
    } else {
      alert("Receipt not found!");
    }
  }

  const handleDeleteReceipt = () => {
    if(!receiptToDelete){
      console.error("No receipt selected for deletion.");
      return;
    }
    const updatedReceipts = myReceipts.filter(receipt => receipt.receiptNumber !== receiptToDelete.receiptNumber);
    setMyReceipts(updatedReceipts);

    // Since JSON is local storage we have to stringfy
    localStorage.setItem('myReceipts', JSON.stringify(updatedReceipts))

    setShowConfirmDeleteModal(false);
    setReceiptToDelete(null);
  }
  

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

        {/* Receipts */}

        <ListOfReceiptCards
          viewReceipts={viewReceipts}
          myReceipts={myReceipts}
        />
      </div>
    </>
  )
}

export default App
