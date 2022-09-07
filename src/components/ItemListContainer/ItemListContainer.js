import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
  return (
    <> 
      <h2 className='d-flex w-25 p-1 mx-auto mt-5 text-center border border-info border-4 rounded'>Este es un { greeting } donde irá el cátalogo.</h2>
      <div className='grupo-botones'>
        <ItemCount stock="10" />
      </div>
    </>
  )
}
export default ItemListContainer;