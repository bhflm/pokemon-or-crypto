import './index.css';

const Modal = ({ handleClose, show, children, current, answer }) => {
  const answerType = answer ? 'Correct!' : 'False';
  console.log('Answer type: ', answerType);
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-content">
        {children}
        <p>{answerType}</p>
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