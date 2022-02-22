/*Author maker*/
function makeUser(name, description){
  return{
    name: name,
    description: description
  }
}

var author1 = makeUser("DAGAMED131", "Ersin");
var author2 = makeUser("Sabin", "Starosta");
var author3 = makeUser("Arman", "QZFKB");
var author4 = makeUser("Tomioka", "somebody...");

var authors = document.querySelectorAll(".aboutAuthor__item h2");
authors[0].append(author1.name);
authors[1].append(author2.name);
authors[2].append(author3.name);
authors[3].append(author4.name);

var authors = document.querySelectorAll(".aboutAuthor__item p");
authors[0].append(author1.description);
authors[1].append(author2.description);
authors[2].append(author3.description);
authors[3].append(author4.description);


/*Smooth move*/
const anchors = document.querySelectorAll('a[href^="#"]');

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}



/*Slider with characters*/
$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3,
      centerMode: true,
      variableWidth: true,
      asNavFor: ".sliderbig",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }]
    });
    $('.sliderbig').slick({
      arrows: false,
      fade: true,
      centerMode: true,
      asNavFor: ".slider"
    });
});


/*Character Voice*/
var voice = new Audio();
document.querySelectorAll(".character__voice")[0].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/tanjiroVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[1].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/zenitsuVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[2].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/inosukeVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[3].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/nezukoVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[4].addEventListener("click", function(){
    voice.pause();
    voice = new Audio('sounds/tomiokaVoice.mp3');
    voice.play();
});
document.querySelectorAll(".character__voice")[5].addEventListener("click", function(){
  voice.pause();
  voice = new Audio('sounds/shinobuVoice.mp3');
  voice.play();
});


/*Video Animation*/
setTimeout(function(){
    $(".part1").css({"transform":"translateY(-60px)"});
    $(".part2").css({"transform":"translateY(60px)"});
  setTimeout(function(){
    $(".part1").css({"transform":"translateY(-1000px)"});
    $(".part2").css({"transform":"translateY(1000px)"});
  }, 800);
  setTimeout(function(){
    $(".part1").css({"display":"none"});
    $(".part2").css({"display":"none"});
  }, 2000);
}, 16000)


/*Video Skip*/
document.addEventListener('keypress', skipAnim);

function skipAnim() {
    $(".part1").css({"transform":"translateY(-60px)"});
    $(".part2").css({"transform":"translateY(60px)"});
setTimeout(function(){
    $(".part1").css({"transform":"translateY(-1000px)"});
    $(".part2").css({"transform":"translateY(1000px)"});
  }, 800);
setTimeout(function(){
    $(".part1").css({"display":"none"});
    $(".part2").css({"display":"none"});
  }, 2000);
}

  
