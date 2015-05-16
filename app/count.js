exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    setTimeout(function(){
      for(i=start; i<=end; i++){
        console.log(i);
      }
    }, 100)
  }
};
