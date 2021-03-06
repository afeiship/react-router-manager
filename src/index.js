(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  // https://zh.wikipedia.org/wiki/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F
  nx.bubbleSort = function (inArray) {
    var temp;
    for (var i = 0; i < inArray.length - 1; i++) {
      for (var j = 0; j < inArray.length - i - 1; j++) {
        if (inArray[j] > inArray[j + 1]) {
          temp = inArray[j];
          inArray[j] = inArray[j + 1];
          inArray[j + 1] = temp;
        }
      }
    }
    return inArray;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.bubbleSort;
  }
})();
