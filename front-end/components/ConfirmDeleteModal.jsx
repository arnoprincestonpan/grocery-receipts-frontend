import { Button, Modal } from "react-bootstrap";

const ConfirmDeleteModal = ({
    showConfirmDeleteModal,
    setShowConfirmDeleteModal,
    receiptToDelete,
    handleDeteleReceipt
}) => {

    return(
    <Modal show={showConfirmDeleteModal} onHide={() => setShowConfirmDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Confirm Deletion
          </Modal.Title>
          <Modal.Body>
            <p>Are you sure you want to delete Receipt #: {receiptToDelete.receiptNumber} from Date: {receiptToDelete.date}?</p>
          </Modal.Body>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDeleteReceipt}>
            Delete
          </Button>
          <Button variant="secondary" onClick={() => setShowConfirmDeleteModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    )
}