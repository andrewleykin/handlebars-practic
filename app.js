(function(){
  var container = $(".container");
  
  $.ajax({
    url: 'data.json'
  }).done(function(){
    console.log(data);
  })
})();