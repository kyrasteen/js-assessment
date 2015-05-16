var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    deferred = $.Deferred();
    setTimeout(function(){
      deferred.resolve(value);
    },10)
    return deferred.promise();
  },

  manipulateRemoteData : function(url) {
    var sorted_names = []
    $.getJSON(url, function(response){
     var people = response.people;
     var sorted = people.sort(function(a, b){
        if(a.name > b.name){
          return 1;
        }
        else if(a.name < b.name){
          return -1;
        }
        else {
          return 0;
        }
      })
      return sorted.forEach(function(el){
        return sorted_names.push(el.name);
      })
    })
    return sorted_names
  }
};
