// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (){
  var a = function (name) {
  console.log("Goodbye " + "John")
}
a();
var a = function (name) {
  console.log("Goodbye " + "Jen")
}
a();

var a = function (name) {
  console.log("Goodbye " + "Jason")
}
a();
var a = function (name) {
  console.log("Goodbye " + "Jim")
}
a();
})();


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
 var byeSpeaker = {};
 byeSpeaker = "Speaker";
 var greeting = "Goodbye ";
 byeSpeaker.speak = function () {
 }
 console.log(greeting + byeSpeaker);

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

(function speak(name) {
byeSpeaker.name = "speaker";
var greeting = "Goodbye";
byeSpeaker.speakWord = function(){
};
console.log(speakWord+" "+name);
})(byeSpeaker);

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;

(function(window){
var byeSpeaker = new Object();
 byeSpeaker.names = "Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim";
 var greeting = "Goodbye";
 byeSpeaker.speak = function (name) {
 console.log(greeting + Speaker);
}
 window.byeSpeaker = byeSpeaker;

})(window);
 


