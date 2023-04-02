
function showWideAreaImage(images) {
  var expandImage = document.getElementById("description_id_main");
  var imgText = document.getElementById("imgtext");
  expandImage.src = images.src;
  expandImage.parentElement.style.display;
  var heading = images.alt;

  switch (heading) {
    case "img_alt_1":
      imgText.innerHTML = "<h3>Football</h3><p>3.	Football is a team sport played between two teams of 11 players each, using a spherical ball to score goals by kicking it into the opponent's net. </p>";
      break;
    case "img_alt_2":
      imgText.innerHTML = "<h3>Cricket</h3><p>1. Cricket is a bat-and-ball game played by two teams of 11 players, with the objective of scoring runs and dismissing opponents.</p>";
      break;
    case "img_alt_3":
      imgText.innerHTML = "<h3>Swimmnig</h3><p>4.	Swimming is a water sport that involves propelling oneself through water using arms and legs. Competitions include various strokes and distances.</p>";
      break;
    case "img_alt_4":
      imgText.innerHTML = "<h3>Rugger</h3><p>2.	Rugby is a contact team sport played with an oval-shaped ball by two teams of 15 players to score points by carrying, passing, or kicking the ball over the opponent's goal line.</p>";
      break;
    case "img_alt_5":
      imgText.innerHTML = "<h3>Baseball</h3><p>5.	Baseball is a bat-and-ball game played between two teams of nine players each. The objective is to score runs by hitting and running around four bases. </p>";
      break;
    case "img_alt_6":
      imgText.innerHTML = "<h3>Basketball</h3><p>6.	Basketball is a team sport played with a ball between two teams of five players. The objective is to score points by shooting the ball through the opposing team's basket.</p>";
      break;
    case "img_alt_7":
      imgText.innerHTML = "<h3>Volleyball</h3><p>7.	Volleyball is a team sport played with a ball over a net between two teams of six players. The objective is to score points by grounding the ball on the opponent's court. </p>";
      break;
    case "img_alt_8":
      imgText.innerHTML = "<h3>Hockey</h3><p>8.	Hockey is a team sport played with a stick and a ball between two teams of players. The objective is to score goals by hitting the ball into the opponent's net. </p>";
      break;
    case "img_alt_9":
      imgText.innerHTML = "<h3>Table Tennis</h3><p>9.	Table tennis, also known as ping-pong, is a sport played between two or four players using small paddles to hit a lightweight ball across a table with a net. </p>";
      break;
    case "img_alt_10":
      imgText.innerHTML = "<h3>Badminton</h3><p>11.	Badminton is a racket sport played between two or four players, hitting a shuttlecock over a net, trying to make it land in the opponent's court. </p>";
      break;
    case "img_alt_11":
      imgText.innerHTML = "<h3>Tennis</h3><p>10.	Tennis is a racket sport played between two or four players on a rectangular court, hitting a ball over a net to score points. </p>";
      break;
    case "img_alt_12":
      imgText.innerHTML = "<h3>Golf</h3><p>12.	Golf is a sport played on a course, where players hit a small ball into a series of holes using various clubs, with the fewest strokes possible. </p>";

      break;
  }
}



function decreaseFontSize() {
  const element = document.getElementById("title_Sports");
  const computedStyle = window.getComputedStyle(element);
  const fontSize = computedStyle.getPropertyValue("font-size");

  currentSize = parseFloat(window.getComputedStyle(element).fontSize);

  if (parseFloat(fontSize) > 25) {
    console.log("Font size is larger than 16px");
    var newSize = currentSize - 1;
    document.getElementById("title_Sports").style.fontSize = newSize + "px";
  } else {
    console.log("Font size is smaller than or equal to 16px");
  }
}


function resetFontSize() {
  document.getElementById("title_Sports").style.fontSize = 3 + "rem";

}


function increaseFontSize() {
  const element = document.getElementById("title_Sports");
  const computedStyle = window.getComputedStyle(element);
  const fontSize = computedStyle.getPropertyValue("font-size");

  currentSize = parseFloat(window.getComputedStyle(element).fontSize);

  if (parseFloat(fontSize) < 35) {
    console.log("Font size is larger than 16px");
    var newSize = currentSize + 1;
    document.getElementById("title_Sports").style.fontSize = newSize + "px";
  } else {
    console.log("Font size is smaller than or equal to 16px");
  }
}



function colorSch_1() {


  document.getElementById("container_id_1").style.backgroundColor = "#04214ba2";
  document.getElementById("container_id_2").style.backgroundColor = "#04214ba2";

  document.getElementById("sport_id_1").style.backgroundColor = "#b3fff0";
  document.getElementById("sport_id_2").style.backgroundColor = "#b3fff0";
  document.getElementById("sport_id_3").style.backgroundColor = "#b3fff0";
  document.getElementById("sport_id_4").style.backgroundColor = "#b3fff0";
  document.getElementById("sport_id_5").style.backgroundColor = "#b3fff0";
  document.getElementById("sport_id_6").style.backgroundColor = "#b3fff0";

  document.getElementById("sport2_id_1").style.backgroundColor = "#b3fff0";
  document.getElementById("sport2_id_2").style.backgroundColor = "#b3fff0";
  document.getElementById("sport2_id_3").style.backgroundColor = "#b3fff0";
  document.getElementById("sport2_id_4").style.backgroundColor = "#b3fff0";
  document.getElementById("sport2_id_5").style.backgroundColor = "#b3fff0";
  document.getElementById("sport2_id_6").style.backgroundColor = "#b3fff0";

  document.getElementById("title_Sports").style.color = "#b3fff0";

  document.getElementById("preview-container_id").style.backgroundColor = "#809fff";
  document.getElementById("preview_id").style.backgroundColor = "#b3fff0";

  document.getElementById("span_id_1").style.color = "#b3fff0";
  document.getElementById("span_id_2").style.color = "#b3fff0";
  document.getElementById("span_id_3").style.color = "#b3fff0";

  document.getElementById("colorSch1").style.borderColor = "#b3fff0";
  document.getElementById("colorSch2").style.borderColor = "#44444400";
  document.getElementById("colorSch3").style.borderColor = "#44444400";


}


function colorSch_2() {
  document.getElementById("container_id_1").style.backgroundColor = "#668cff";
  document.getElementById("container_id_2").style.backgroundColor = "#668cff";

  document.getElementById("sport_id_1").style.backgroundColor = "#ffff80";
  document.getElementById("sport_id_2").style.backgroundColor = "#ffff80";
  document.getElementById("sport_id_3").style.backgroundColor = "#ffff80";
  document.getElementById("sport_id_4").style.backgroundColor = "#ffff80";
  document.getElementById("sport_id_5").style.backgroundColor = "#ffff80";
  document.getElementById("sport_id_6").style.backgroundColor = "#ffff80";

  document.getElementById("sport2_id_1").style.backgroundColor = "#ffff80";
  document.getElementById("sport2_id_2").style.backgroundColor = "#ffff80";
  document.getElementById("sport2_id_3").style.backgroundColor = "#ffff80";
  document.getElementById("sport2_id_4").style.backgroundColor = "#ffff80";
  document.getElementById("sport2_id_5").style.backgroundColor = "#ffff80";
  document.getElementById("sport2_id_6").style.backgroundColor = "#ffff80";


  document.getElementById("title_Sports").style.color = "#ffff80";

  document.getElementById("preview-container_id").style.backgroundColor = "#ccebff";
  document.getElementById("preview_id").style.backgroundColor = "#ffff80";

  document.getElementById("span_id_1").style.color = "#ffff80";
  document.getElementById("span_id_2").style.color = "#ffff80";
  document.getElementById("span_id_3").style.color = "#ffff80";

  document.getElementById("colorSch1").style.borderColor = "#44444400";
  document.getElementById("colorSch2").style.borderColor = "#ffff80";
  document.getElementById("colorSch3").style.borderColor = "#44444400";


}

function colorSch_3() {
  document.getElementById("container_id_1").style.backgroundColor = "#d3f5f9";
  document.getElementById("container_id_2").style.backgroundColor = "#d3f5f9";

  document.getElementById("sport_id_1").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport_id_2").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport_id_3").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport_id_4").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport_id_5").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport_id_6").style.backgroundColor = "#6b5b5b63";

  document.getElementById("sport2_id_1").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport2_id_2").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport2_id_3").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport2_id_4").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport2_id_5").style.backgroundColor = "#6b5b5b63";
  document.getElementById("sport2_id_6").style.backgroundColor = "#6b5b5b63";


  document.getElementById("title_Sports").style.color = "#444";

  document.getElementById("preview-container_id").style.backgroundColor = "#3f50684b";
  document.getElementById("preview_id").style.backgroundColor = "#25232363";

  document.getElementById("span_id_1").style.color = "#444";
  document.getElementById("span_id_2").style.color = "#444";
  document.getElementById("span_id_3").style.color = "#444";

  document.getElementById("colorSch1").style.borderColor = "#44444400";
  document.getElementById("colorSch2").style.borderColor = "#44444400";
  document.getElementById("colorSch3").style.borderColor = "#6b5b5b63";
}




