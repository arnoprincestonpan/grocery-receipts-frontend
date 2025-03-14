import React from "react";

const ReceiptCard = ({ receipt, index }) => {

    return(
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
    )
}

export default ReceiptCard;