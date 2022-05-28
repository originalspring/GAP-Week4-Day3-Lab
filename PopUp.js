var photos = []; //Declare an empty array to store image element
var fileNames = []; //Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list that contain an image
var image; //Declare an empty variable to store the assembled image list codes
var openList1 = "<li id='photo"
var openList2 = "'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain an close list tag
var openCaption = "<p class='caption'>";
var closeCaption = "</p>";
var captionText = ["Beautiful Winter","Snow Land","Wintery Road","Winter in the Country","Bitter Cold Day","Sunny Winter Day"];
// var openDesc = "<div class='description'>";
// var closeDesc = "</div>";
var descText = [
  "A beautiful winter scenery in the morning",
  "After an overnight snowstorm",
  "Snowy drive on the road",
  "Snow day in the country",
  "Burrrrr...a typical cold in January",
  "Cold, snowy but sunny and beautiful"
];
//   pop//
//   var openPop="<div id='Popup'>";
//   var closePop="</div>";
//   var paraOpen="<p>";
//   var paraClose="</p>";
//   var paragraph = ["paragraph1","paragraph2","paragraph3", "paragraph4","paragraph5","paragraph6"];
//   var popList=[];
//   var pop;
//   var closebuttonOpen="<p>";
//   var closebuttonClose="</p>";
//   var content="Close this to close";
// var captiononPop=  openCaption+ captionText[i] + closeCaption;
// var infoPop=paraOpen + paragraph[i] + paraClose;
// var button= closebuttonOpen + content + closebuttonClose;
var closeinfoBox = "Click to close";
var openDescTag = "<p class='description' onClick='showinfoBox(";
var openDescClose = ")'>";
var closeDescTag = "</p>";
var descriptions=[];
var titleTexts =["Beautiful Winter","Snow Land","Wintery Road","Winter in the Country","Bitter Cold Day","Sunny Winter Day"];
var descTexts=[
"<p>Nature in the winter season is sleeping, because of low temperatures, frost in the air and snowing weather. You are able to see trees, that just covered by snow, as a ground.</p>",
"<p>Most of plants and animals are having their hibernation period, so winter is not full of bright colors, but who says that white, snowy and a bit magical winter is not cool?</p>",
"<p>The most beautiful phenomenon of the winter is snow! You know that the snowflakes are never repeat themselves, they have amazing shapes, that different with each new snowflake.</p>",
"<p>Another amazing thing, that we can see in winter is crystallization of the water. This phenomenon is really beautiful and makes environment more picturesque. To add more, on some frozen lakes it is allowed to ride a ski!</p>",
"<p>Days become short, as usual not so sunny and nights are becoming longer. Also winter season is the best time in the year to see starts in t night sky, due to they are the brightest in this time of the year.</p>",
"<p>Winter is one of the four Earth’s seasons, that goes after autumn and foreshadows spring. This season is the coldest in the whole year, but not in the tropical zones. Everyone feels some magic in the air, because of frosts, crystal nights, snow and just this amazing atmosphere.</p>",
]
for (var i=0; i<6; i++) {
  fileNames.push("winterland"+(i+1)); //Create image file name and store in the array
  photos.push("<img src='images/"+fileNames[i]+".jpg'>"); //Assemble file name into image element and store in an array
  //Assemble the image element from the array with list element stored in variables
  
  // image = openList1 + (i+1) + openList2 + descriptions[i] + photos[i] + "<br>" + openCaption + titleTexts[i] + closeCaption +
  // openDesc + descText[i] + closeDesc + closeList;
​
  
  image = openList1 + (i+1) + openList2 + photos[i] + "<br>" + openCaption + captionText[i] + closeCaption + openDescTag + i + openDescClose + descText[i] + closeDescTag + closeList; 
  //Store(push) the assembled list codes into an array
  imageList.push(image);
}
document.getElementById("album").innerHTML = imageList.join(" ");
//Get info box close text link
var closeinfo = document.getElementById("closeInfo");
closeinfo.addEventListener("click", hideInfo);
​
function showinfoBox(i) {
  document.getElementById("infoBox").style.visibility = 'visible';
  document.getElementById("title").innerHTML = titleTexts[i];
  document.getElementById("info").innerHTML = descTexts[i];
  document.getElementById("closeInfo").innerHTML = closeinfoBox;
};

//To hide info box
function hideInfo() {
document.getElementById("infoBox").style.visibility="hidden";
}