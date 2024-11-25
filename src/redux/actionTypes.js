/**
 * Aksiyon tipleri string olduğundan dolayı yanlış yazma ihtimalimiz oldukça yüksek
 * Hata ihtimalini düşürmek için aksiyonları bu dosyada bir nesne içerisinde tutalım ve kullanılacağı zaman buradan çağıralım
 */

const ActionTypes = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
};

export default ActionTypes;
