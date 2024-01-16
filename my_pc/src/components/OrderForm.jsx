import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './OrderForm.css'; 

const OrderForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Обработка данных формы, например, отправка на сервер
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя:</label>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>

      <div>
        <label>Фамилия:</label>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>

      <div>
        <label>Отчество:</label>
        <Controller
          name="patronymic"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>

      <div>
        <label>Номер телефона:</label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => <input {...field} type="tel" />}
        />
      </div>

      <div>
        <label>Адрес получателя:</label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>

      <div>
        <label>Тип оплаты:</label>
        <Controller
          name="paymentType"
          control={control}
          render={({ field }) => <select {...field}>
            <option value="cashOnDelivery">Наложенный платеж</option>
            <option value="onlinePayment">Оплата онлайн</option>
          </select>}
        />
      </div>

      <div>
        <label>Тип доставки:</label>
        <Controller
          name="deliveryType"
          control={control}
          render={({ field }) => <select {...field}>
            <option value="postOffice">На отделение Новой Почты</option>
            <option value="selfPickup">Самовывоз</option>
          </select>}
        />
      </div>

      <div>
        <label>Комментарии:</label>
        <Controller
          name="comments"
          control={control}
          render={({ field }) => <textarea {...field} />}
        />
      </div>

      <div>
        <button type="submit">Приобрести</button>
      </div>
    </form>
  );
};

export default OrderForm;
