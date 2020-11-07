





//make function to get rid of homepage cosmetics and add backstory
$("#proceed").click(function() {
  //remove contents
  $("#proceed").remove();
  $("#help").remove();
  $("#title").remove();
  //add backstory off manor
  $("#test").append("<p> Moreburn Chateau was a lively manor at the turn of the 20th century, run by the Lord and Lady Moreburn. The manor was doing well, grounds surrounding the property, a tightly knit staff, and all run by respected heads of the surrounding community.</p> <p>One evening, however, when Lord Moreburn was out of town on a business trip, a fire broke out that consumed the manor, killing the staff who stayed behind that night, and Lady Moreburn. Now the player, a century later, must investigate the wreckage and put the spirits that continue to walk the grounds to rest. </p>");
  //add css for the backstory
  $("#test").css({"background": "rba()",
                  "border": "lime 4px solid",
                  "margin": "25px",
                  "padding": "15px",
                  });
});

$("#help").click(function() {
  alert("Use the arrow keys to navigate your way through the mysterious mansion");
  console.log("click");
});


// #test {
//   margin: 30px;
//   background-color: black;
//   border: green 5px solid;
// }
