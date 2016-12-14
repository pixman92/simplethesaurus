// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

// $.get('/', function(response){
//   for(var i=0;i<word.length;i++){
//     $("#wordsHere").prepend("<br><div>"+response.word+"</div>");
//   }
// });


$(function(){
  
  $.get("/print", function(response){
    $("#wordsHere").prepend(word)
  });
  
  
  $("form").submit(function(event){
      event.preventDefault();
    // $.post("/", function(request, response){
      // alert("Word Searched?" + word);
      var word = $("#word").val();
      $.post("/print?myWord=word", function(req, res){
          console.log("I ran "+ word);
          window.location = "./print";
          
      });
  });

  
});