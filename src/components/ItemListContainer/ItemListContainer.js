import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  return (
    <> 
      <h2 className='mx-auto mt-5 mb-5 text-center'>{greeting}</h2>
      <div className='grupo-botones'>
        <ItemList/>
        <ItemCount />
      </div>
    </>
  )
}
export default ItemListContainer;