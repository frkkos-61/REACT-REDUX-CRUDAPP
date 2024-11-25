import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import ActionTypes from "../redux/actionTypes";

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  //*Dispatch kurulum
  const dispatch = useDispatch();

  //*Sil
  const handleDelete = () => {
    dispatch({
      type: ActionTypes.DELETE,
      payload: todo.id,
    });
  };

  //*durumu değiştir.
  const handleStatus = () => {
    //*reducer'a haber gönder
    dispatch({
      type: ActionTypes.TOGGLE,
      payload: todo,
    });
  };

  return (
    <div className="border rounded p-4 my-5 shadow-lg">
      <h5> {todo.text} </h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>

      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={handleStatus} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;
