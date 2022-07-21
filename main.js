// TODO: Select all p tags within team-inner-content class
const allText = document.querySelectorAll(".team-inner-content p");
// Iterate over p tag node list. Pass in innerText to pig latin function. Replace p tag's innerText with the output.
allText.forEach((text) => {
  const updatedText = pigLatin(text.innerText);
  text.innerText = updatedText;
});

// change all h2 tags to pig latin
const allh2 = document.querySelectorAll("h2");
allh2.forEach((text) => {
  const updatedText = pigLatin(text.innerText);
  text.innerText = updatedText;
});

// change all of the borders of the team member images to pink
const imgs = document.querySelectorAll(".team-member-image img");
imgs.forEach((img) => {
  img.style.border = "3px solid #e64980";
});

// change nav bar to pig latin
const allLinks = document.querySelectorAll("a");
allLinks.forEach((link) => {
  const updatedText = pigLatin(link.innerText);
  link.innerText = updatedText;
});
// change image under About Us and overlay color to pink
// const bannerWrapper = window.getComputedStyle(
//   document.querySelector(".banner-wrapper"),
//   ":after"
// );

// possible img for hero section: https://st2.depositphotos.com/1821481/5242/i/450/depositphotos_52424675-stock-photo-small-eared-pigs.jpg
const parentDiv = document.querySelector("#hs_cos_wrapper_DND_banner-module-1");

const bannerWrapper = document.querySelector(".banner-wrapper");
const pigImg = document.createElement("div");

pigImg.classList.add("piggies");
pigImg.style.minHeight = "60vh";
pigImg.style.maxHeight = "100vh";
pigImg.style.position = "relative";
//pigImg.style.backgroundSize = "cover";

//position: relative;
//  min-height: 60vh;
//  max-height: 100vh;

pigImg.style.backgroundImage = `url('https://st2.depositphotos.com/1821481/5242/i/450/depositphotos_52424675-stock-photo-small-eared-pigs.jpg')`;

// bannerWrapper.style.backgroundImage = `url('https://st2.depositphotos.com/1821481/5242/i/450/depositphotos_52424675-stock-photo-small-eared-pigs.jpg')`;

parentDiv.replaceChild(pigImg, bannerWrapper);

// console.log(bannerWrapper.classList);
// class-selector: .banner-wrapper:after
// console.log(bannerWrapper.children);
// bannerBackground.style.backgroundColor = "#e64980aa";
// https://stackoverflow.com/questions/38872290/how-to-get-pseudo-element

// change the background color --> from light blue to pink
const teamWrapper = document.querySelector(".team-wrapper");
teamWrapper.style.backgroundColor = "#fff0f6";

const navRight = document.querySelector(".navbar_right");
navRight.style.backgroundColor = "#fff0f6";

const navBtn = document.querySelector(".nav-apply-now-button");
navBtn.style.background = "#e64980";

const nav = document.querySelector(".header-inner");
nav.style.backgroundColor = "#fff0f6";

const slickList = document.querySelector(".floatingNav_container");
slickList.parentElement.removeChild(slickList);

const logo = document.querySelector("#hs-link-header_logo_hs_logo_widget");
logo.parentElement.removeChild(logo);
// const chatBox = document.querySelector("#hubspot-messages-iframe-container");
// chatBox.parentElement.removeChild(chatBox);

// TODO: Create the pig latin translator function
// https://www.getblend.com/blog/how-to-speak-pig-latin/
function pigLatin(string) {
  // split method to split the string into individual words, stored in an array
  const wordArray = string.split(" ");
  // map over the array and apply the logic for string manip inside of the callback
  const pigLatinArray = wordArray.map((word) => {
    word = word.toUpperCase();
    if ("AEIOU".includes(word[0])) {
      word = word + "YAY";
    } else {
      let vowelIndex = 1;
      while (vowelIndex < word.length && !"AEIOUY".includes(word[vowelIndex])) {
        vowelIndex++;
      }
      word = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "AY";
    }
    return word[0] + word.slice(1).toLowerCase();
    // rule 3
    // If the word contains a hyphen, separate into two words, manipulate the words individually and join them with the hyphen
  });

  // join the array back into one string
  return pigLatinArray.join(" ");
}

// Add button for "Cuteness Overload" to Make images go crazy
const overloadBtn = document.createElement("button");
overloadBtn.innerText = "CUTENESS OVERLOAD!";
overloadBtn.style.fontSize = "40px";
overloadBtn.style.border = "3px solid pink";
overloadBtn.style.height = "auto";
overloadBtn.style.width = "auto";
overloadBtn.style.position = "absolute";
overloadBtn.style.top = "50%";
overloadBtn.style.left = "50%";
overloadBtn.style.transform = "translate(-50%,-50%)";

pigImg.appendChild(overloadBtn);

// Change cursor to pig photo
