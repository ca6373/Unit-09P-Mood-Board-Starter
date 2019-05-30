




var happyImages = [
    "https://media.giphy.com/media/DYH297XiCS2Ck/giphy.gif", 
    "https://media.giphy.com/media/Ve20ojrMWiTo4/giphy.gif",
    "https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif"
];
var sadImages = ["https://media.giphy.com/media/kUXH2l50V7maA/giphy.gif","https://media.giphy.com/media/TW8Ma1a8ZsZ8I/giphy.gif","https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif"];
var angryImages = ["https://media.giphy.com/media/l1J9u3TZfpmeDLkD6/giphy.gif","https://media.giphy.com/media/y1WDIwAZRSmru/giphy.gif","https://media.giphy.com/media/pYI1hSqUdcBiw/giphy.gif"];
var hungryImages = ["https://media.giphy.com/media/tZaFa1m8UfzXy/giphy.gif","https://media.giphy.com/media/3oEduGwAYUUlMaimOY/giphy.gif","https://media.giphy.com/media/rMS89RxHOzjGw/giphy.gif" ];


$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "sad"){
        sadMood();
    } else if(input==="happy"){
        happyMood();
    }else if(input==="angry"){
      angryMood();
    }else if(input==="hungry"){
        hungryMood();
    }else{
     alert("Please enter sad, angry, hungry, or happy!!");
}
});
function sadMood(){
    changeBackground("grey");
    changeTextColor("purple");
    showImage(sadImages);
}

function happyMood(){
changeBackground("orange");
 changeTextColor("blue");
 showImage(happyImages);
}
function hungryMood(){
 changeBackground("green");
  changeTextColor("white");
  showImage(hungryImages);
}
function angryMood(){
changeBackground("red");
changeTextColor("yellow");
showImage(angryImages);
}
function changeBackground(color){
   $("body").css("background-color", color);
}
function changeTextColor(color){
    $("body").css("color", color);
}
function showImage(Image){
    Image.forEach(function(images){
        $(".images").append("<img src="+images+">");
        console.log(images);
});
}
