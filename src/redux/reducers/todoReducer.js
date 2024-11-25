const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    //* eğer aksiyonun type'ı add ise
    case "ADD":
      //* aksiyonun payload'ı ile yeni gelen todoyu eskilerin arasına ekle
      const newTodos = state.todos.concat(action.payload);

      //* state'in son halini return et.
      return { todos: newTodos };

    case "DELETE":
      //*Diziden payload ile gelen id'li elemanı kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      return { todos: filtred };

    case "TOGGLE":
      //* is_done değerini tersine çevir.
      const updated = { ...action.payload, is_done: !action.payload.is_done };

      //* dizideki eski nesnenin yerine yenisini koy
      const updatedTodos = state.todos.map((i) =>
        i.id === updated.id ? updated : i
      );

      return { todos: updatedTodos };

    case "UPDATE":
      const editedTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { todos: editedTodos };

    default:
      return state;
  }
};

export default todoReducer;
