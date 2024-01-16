// GoodsList.jsx

import React from 'react';
import { GoodsItem } from './GoodsItem';
import products from './produ'; // Импортируем массив товаров из файла produ.jsx

function GoodsList(props) {
  const { addToBasket = Function.prototype } = props;

  if (!products.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="produ">
      {products.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export { GoodsList };
