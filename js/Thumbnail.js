
function showWideAreaImage(images) {
  var expandImage = document.getElementById("description_id_main"); 
  var imgText = document.getElementById("imgtext");
  expandImage.src = images.src; 
  expandImage.parentElement.style.display;
  var heading = images.alt; 

  switch (heading) {
    case "img_alt_1":
      imgText.innerHTML = "<h3>Football</h3><p>Culpa in nisi asperiores dicta rem quasi? Fugit nam dolorem voluptates blanditiis reprehenderit porro? Omnis minus suscipit similique reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deserunt distinctio. </p>";
      break;
    case "img_alt_2":
      imgText.innerHTML = "<h3>Cricket</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deserunt distinctio. Culpa in nisi asperiores dicta rem quasi? Fugit nam dolorem voluptates blanditiis reprehenderit porro? Omnis minus suscipit similique reiciendis!</p>";
      break;
    case "img_alt_3":
      imgText.innerHTML = "<h3>Swimmnig</h3><p>Culpa in nisi asperiores dicta rem quasi? Fugit nam dolorem voluptates blanditiis reprehenderit porro? Omnis minus suscipit similique reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deserunt distinctio. </p>";
      break;
    case "img_alt_4":
      imgText.innerHTML = "<h3>Rugger</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deserunt distinctio. Culpa in nisi asperiores dicta rem quasi? Fugit nam dolorem voluptates blanditiis reprehenderit porro? Omnis minus suscipit similique reiciendis!</p>";
      break;
    case "img_alt_5":
      imgText.innerHTML = "<h3>Hocky</h3><p>Culpa in nisi asperiores dicta rem quasi? Fugit nam dolorem voluptates blanditiis reprehenderit porro? Omnis minus suscipit similique reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deserunt distinctio. </p>";

      break;
  }
}



function decreaseFontSize(){
  const element = document.getElementById("title_Sports");
  const computedStyle = window.getComputedStyle(element);
  const fontSize = computedStyle.getPropertyValue("font-size");

  currentSize = parseFloat(window.getComputedStyle(element).fontSize);

if (parseFloat(fontSize) > 20) {
  console.log("Font size is larger than 16px");
  var newSize = currentSize -1;
  document.getElementById("title_Sports").style.fontSize = newSize + "px";
} else {
  console.log("Font size is smaller than or equal to 16px");
}
}


function resetFontSize(){
  document.getElementById("title_Sports").style.fontSize = 3 + "rem";
  
}


function increaseFontSize(){
  const element = document.getElementById("title_Sports");
  const computedStyle = window.getComputedStyle(element);
  const fontSize = computedStyle.getPropertyValue("font-size");

  currentSize = parseFloat(window.getComputedStyle(element).fontSize);

if (parseFloat(fontSize) < 40) {
  console.log("Font size is larger than 16px");
  var newSize = currentSize +1;
  document.getElementById("title_Sports").style.fontSize = newSize + "px";
} else {
  console.log("Font size is smaller than or equal to 16px");
}
}



function colorSch_1(){


        document.getElementById("container_id_1").style.backgroundColor =  "#04214ba2" ;
        document.getElementById("container_id_2").style.backgroundColor =  "#04214ba2" ;

        document.getElementById("sport_id_1").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport_id_2").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport_id_3").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport_id_4").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport_id_5").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport_id_6").style.backgroundColor =  "#b3fff0" ;

        document.getElementById("sport2_id_1").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport2_id_2").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport2_id_3").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport2_id_4").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport2_id_5").style.backgroundColor =  "#b3fff0" ;
        document.getElementById("sport2_id_6").style.backgroundColor =  "#b3fff0" ;

        document.getElementById("title_Sports").style.color =  "#b3fff0" ;

        document.getElementById("preview-container_id").style.backgroundColor =  "#809fff" ;
        document.getElementById("preview_id").style.backgroundColor =  "#b3fff0" ;

        document.getElementById("span_id_1").style.color =  "#b3fff0" ;
        document.getElementById("span_id_2").style.color =  "#b3fff0" ;
        document.getElementById("span_id_3").style.color =  "#b3fff0" ;

        document.getElementById("colorSch1").style.borderColor =  "#b3fff0" ;
        document.getElementById("colorSch2").style.borderColor =  "#44444400" ;
        document.getElementById("colorSch3").style.borderColor =  "#44444400" ;


}


function colorSch_2(){
  document.getElementById("container_id_1").style.backgroundColor =  "#668cff" ;
  document.getElementById("container_id_2").style.backgroundColor =  "#668cff" ;

  document.getElementById("sport_id_1").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport_id_2").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport_id_3").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport_id_4").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport_id_5").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport_id_6").style.backgroundColor =  "#ffff80" ;

  document.getElementById("sport2_id_1").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport2_id_2").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport2_id_3").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport2_id_4").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport2_id_5").style.backgroundColor =  "#ffff80" ;
  document.getElementById("sport2_id_6").style.backgroundColor =  "#ffff80" ;


  document.getElementById("title_Sports").style.color =  "#ffff80" ;

  document.getElementById("preview-container_id").style.backgroundColor =  "#ccebff" ;
  document.getElementById("preview_id").style.backgroundColor =  "#ffff80" ;

  document.getElementById("span_id_1").style.color =  "#ffff80" ;
  document.getElementById("span_id_2").style.color =  "#ffff80" ;
  document.getElementById("span_id_3").style.color =  "#ffff80" ;

  document.getElementById("colorSch1").style.borderColor =  "#44444400" ;
  document.getElementById("colorSch2").style.borderColor =  "#ffff80" ;
  document.getElementById("colorSch3").style.borderColor =  "#44444400" ;


}

function colorSch_3(){
  document.getElementById("container_id_1").style.backgroundColor =  "#5373771a" ;
  document.getElementById("container_id_2").style.backgroundColor =  "#5373771a" ;

  document.getElementById("sport_id_1").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport_id_2").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport_id_3").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport_id_4").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport_id_5").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport_id_6").style.backgroundColor =  "#6b5b5b63" ;

  document.getElementById("sport2_id_1").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport2_id_2").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport2_id_3").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport2_id_4").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport2_id_5").style.backgroundColor =  "#6b5b5b63" ;
  document.getElementById("sport2_id_6").style.backgroundColor =  "#6b5b5b63" ;


  document.getElementById("title_Sports").style.color =  "#444" ;

  document.getElementById("preview-container_id").style.backgroundColor =  "#3f50684b" ;
  document.getElementById("preview_id").style.backgroundColor =  "#25232363" ;

  document.getElementById("span_id_1").style.color =  "#444" ;
  document.getElementById("span_id_2").style.color =  "#444" ;
  document.getElementById("span_id_3").style.color =  "#444" ;

  document.getElementById("colorSch1").style.borderColor =  "#44444400" ;
  document.getElementById("colorSch2").style.borderColor =  "#44444400" ;
  document.getElementById("colorSch3").style.borderColor =  "#6b5b5b63" ;
}




