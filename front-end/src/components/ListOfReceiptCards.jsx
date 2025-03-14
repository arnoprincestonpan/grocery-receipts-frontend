import React from 'react';
import ReceiptCard from './ReceiptCard';

const ListOfReceiptCards = ( { viewReceipts, myReceipts } ) => {
    return (
        <>
            {
                viewReceipts && 
                    myReceipts.map((receipt, index) => (
                        <ReceiptCard
                            receipt={receipt}
                            index={index}
                        />
                    ))
            }
        </>
    )
}

export default ListOfReceiptCards;