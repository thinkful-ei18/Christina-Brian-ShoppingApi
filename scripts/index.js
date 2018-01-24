/* global shoppingList, store */
'use strict'; 

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.getItems('apples', function(data) {
  console.log(data);
});

console.log(api.BASE_URL);