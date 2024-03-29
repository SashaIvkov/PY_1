import { useEffect } from 'react';

function Alert(props) {
  const { name = '', closeAlert = Function.protype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} Додано до кошику</div>
    </div>
  );
}

export { Alert };
