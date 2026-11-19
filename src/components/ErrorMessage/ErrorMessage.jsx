import './ErrorMessage.css';

function ErrorMessage({message = 'Сервис OMDb недоступен. Проверьте соединение и попробуйте снова.'}) {
  return (
    <div className="error-message" role="alert">
      <p className="error-message__title">Что-то пошло не так</p>
      <p className="error-message__text">
        {message}
      </p>
    </div>
  );
}

export default ErrorMessage;
