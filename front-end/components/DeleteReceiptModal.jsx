import { Button, Modal, Form } from 'react-boostrap';

const DeleteReceiptModal = ({
    showDeleteModal,
    setShowDeleteModal,
    receiptNumber,
    setReceiptNumber,
    checkReceiptNumber
}) => {
    return(
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
          <Button variant="secondary" onClick={checkReceiptNumber}>
            Submit
          </Button>
          <Button variant="danger" onClick={() => setShowDeleteModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default DeleteReceiptModal;