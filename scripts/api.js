'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/brichri';

  return {
    getItems : function (callback) {
      $.getJSON(`${BASE_URL}/items`, callback);
    },

    createItem : function (name, callback) {
      const newItem = JSON.stringify ( {
        name : name,
      } );
      $.ajax ({
        url : `${BASE_URL}/items`,
        method : 'POST',
        contentType : 'application/json',
        data : newItem,
        success : callback
      });
    },

    updateItem : function (id, updateData, callback) {
      $.ajax ({
        url : `${BASE_URL}/items/${id}`,
        method: 'PATCH',
        contentType : 'application/json',
        data : JSON.stringify(updateData),
        success : callback,
      });
    },

    deleteItem : function (id, callback) {
      $.ajax ({
        url : `${BASE_URL}/items/${id}`,
        method : 'DELETE',
        success : (log) => {
          console.log('delete successful!');
          callback();
        }


      });
    }


  };

}


());