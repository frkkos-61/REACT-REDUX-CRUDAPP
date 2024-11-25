/*
! STORE
* Bütün reducer'ların tek bir yerde toplandığı state deposudur

* 1) Redux kütüphanesinden createStroe methodu import edilir.

* 2) store içerisinde tutulacak olan her bir veri için reducerlar olşuturulur

* 3) Oluşturulan reducerlar `combineReducers` methodu ile birleştirilir
*/

import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

//! STORE OLUŞTUR
const store = createStore(rootReducer);

//* Projeye tanıtmak için export et, main.jsx de
export default store;
