function PokeStore(options) {

  this._store = localStorage;
}

PokeStore.prototype = {
  load: function() {
    var data = this._store.getItem("keep.data");
    if (!data) {
      console.error("empty stored Poke data:", data);
      return [];
    }
    try {
      return JSON.parse(data) || [];
    } catch (e) {
      console.error("failed parsing kept data:", data, e);
      return [];
    }
  },

  save: function(data) {
    try {
      this._store["keep.data"] = JSON.stringify(data);
    } catch (e) {
      console.error("failed saving keep data", e);
    }
  },


};

module.exports = PokeStore;
