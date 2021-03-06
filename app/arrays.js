exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    sum = arr.reduce(function(a, b){
      return a + b;
    });
    return sum;
  },

  remove : function(arr, item) {
    newArray = arr.filter(function(el){
      return el != item;
    });
    return newArray;
  },

  removeWithoutCopy : function(arr, item) {
    for(i=0; i<arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1)
        i --
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item)
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0, item)
    return arr;
  },

  count : function(arr, item) {
    var count = 0
    arr.forEach(function(el){
      if(el === item){
        count ++;
      }
    })
    return count;
  },

  duplicates : function(arr) {
    var dups = [];
    sorted = arr.sort();

    function notThere(dups, num) {
      return dups.indexOf(num) === -1
    }

    sorted.forEach(function(num){
      if(num === arr[arr.indexOf(num)+1] && notThere(dups, num)) {
        dups.push(num);
      }
    })
    return dups;
  },

  square : function(arr) {
    var squaredArray = []
    arr.forEach(function(el){
     squaredArray.push(el * el)
    })
    return squaredArray;
  },

  findAllOccurrences : function(arr, target) {
    var occurences = []
    for(i=0; i<arr.length; i++){
      if(arr[i] === target){
        occurences.push(i);
      }
    }
    return occurences;
  }
};
