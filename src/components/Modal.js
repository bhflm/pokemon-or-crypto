import './index.css';

const Modal = ({ handleClose, show, children, current, answer }) => {
  const isCorrect = answer === current.type;
  const modalSelector = isCorrect ? 'modal-correct' : 'modal-false';
  const result = isCorrect ? 'Correct!' : 'False >:(';
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-content">
        {children}
        <p className={modalSelector}> {`${result}`}</p>
        <img className="modal-img" alt={`${current.name}`} src={`${process.env.PUBLIC_URL}/images/${current.img}`} />
        <p className="modal-text">
         {current.description} 
        </p>
        <button className="modal-button" type="button" onClick={handleClose}>
          Close
        </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;