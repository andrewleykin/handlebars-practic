(function(){
  var container = $(".container");
  
  $.ajax({
    url: 'data.json'
  }).done(function(){
    var json = JSON.parse(data);
    var source   = $("#news").html();
    var template = Handlebars.compile(source);
    var html    = template(json);
    container.append(html);
  })
})();