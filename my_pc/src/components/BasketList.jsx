import React, { useState } from 'react';
import { BasketItem } from './BasketItem';
import OrderForm from './OrderForm'; 

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity,
    decQuantity,
  } = props;

  const [isOrderFormVisible, setOrderFormVisible] = useState(false);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  const handleOrderButtonClick = () => {
    setOrderFormVisible(true);
  };

  const handleCloseOrderForm = () => {
    setOrderFormVisible(false);
  };

  return (
    <div>
      <ul className="collection basket-list">
        <li className="collection-item active blue darken-1">Кошик</li>
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.id}
              removeFromBasket={removeFromBasket}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
              {...item}
            />
          ))
        ) : (
          <li className="collection-item">Кошик пустий</li>
        )}
        <li className="collection-item active blue darken-1">Загальна сума: {totalPrice} Грн. </li>
        <li className="collection-item center">
          <button className="btn blue accent-4" onClick={handleOrderButtonClick}>
            Оформити замовлення
          </button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          clear
        </i>
      </ul>

      {isOrderFormVisible && (
        <div className="order-form-container">
          <OrderForm />
          {/* Нет необходимости в отдельной кнопке для закрытия формы */}
        </div>
      )}
    </div>
  );
}

export { BasketList };
