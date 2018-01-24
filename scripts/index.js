/* global shoppingList, store */
'use strict'; 

$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems(items => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});