/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse = `${excuseGenerator(who)} ${excuseGenerator(
    action
  )} ${excuseGenerator(what)} ${excuseGenerator(when)}`;
  let element = document.getElementById("excuse");
  element.innerHTML = excuse;
};

function excuseGenerator(arrays) {
  return arrays[Math.floor(Math.random() * arrays.length)];
}
