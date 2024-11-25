/*
! Reducer
* state'in nasıl değişeceğine karar veren fonk
*bu fonk 2 parametre alır:
>> state: reducer'da tutulan verinin son durumu
>> action: verilerin nasıl değişeceğini ifade eden nesne

* reducer fonksiyonunda return edilen değer state'in son değeri olur

* useReducer'dan farklı olarak redux'a reducer yazarken state'in ilk değerini veririz
*/

const initialState = {
  user: null,
  token: "",
  isAuth: false,
};

/**Buradaki case kısımları projeye göre, reducer'a gelen aksiyonun tipine göre state'in nasıl değişeceğine karar verir, değişir. */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;

    case "SIGNUP":
      return state;

    case "LOGOUT":
      return state;

    //* state'i olduğu gibi tut
    default:
      return state;
  }
};

export default userReducer;
