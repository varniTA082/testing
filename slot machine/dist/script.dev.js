"use strict";

//When page loads
$(document).ready(function () {
  var spinning = false;
  var cash = 1000;
  var betType = 0;
  var charType = ["😁", "😂", "😎"];
  var slots = [["😁", "😂", "😁"], ["😂", "😁", "😎"], ["😎", "😎", "😂"]]; //this funtion needs to be called in order to display any change in the slots

  function init_slots() {
    $("#row1").text(slots[0][0] + " " + slots[0][1] + " " + slots[0][2]);
    $("#row2").text(slots[1][0] + " " + slots[1][1] + " " + slots[1][2]);
    $("#row3").text(slots[2][0] + " " + slots[2][1] + " " + slots[2][2]);
  } //this funtion displays the current value in cash i.e. there is a change in cash and you want the player to be able to see that


  function init_cash() {
    $("#money").text("$" + " " + cash);
  }

  init_slots(); // init_cash();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var column = 0;

  function spin() {
    var spinTimer = setInterval(function () {
      if (random_num_spins[column] > 0) {
        for (var i = 0; i < 3; i++) {
          if (slots[i][column] === "😁") {
            slots[i][column] = "😎";
            continue;
          }

          if (slots[i][column] === "😂") {
            slots[i][column] = "😁";
            continue;
          }

          if (slots[i][column] === "😎") {
            slots[i][column] = "😂";
            continue;
          }
        }

        init_slots();
        random_num_spins[column]--;
      } else {
        if (column == 2) {
          //checks if there are 3 of a kind in a row
          for (var z = 0; z < 3; z++) {
            if (slots[z][0] === "😎" && slots[z][1] === "😎" && slots[z][2] == "😎") {
              $("#victoryMessage").text("You hit the jackpot! 3");
              $("#instructions").css("font-size", "30");
              $("#instructions").text("You won ✨"); // cash += 5*betType;
            }

            if (slots[z][0] === "😂" && slots[z][1] === "😂" && slots[z][2] == "😂") {
              $("#victoryMessage").text("You hit the jackpot! 3");
              $("#instructions").css("font-size", "30");
              $("#instructions").text("You won ✨"); // cash += 10*betType;
            }

            if (slots[z][0] === "😁" && slots[z][1] === "😁" && slots[z][2] == "😁") {
              $("#instructions").css("font-size", "30");
              $("#victoryMessage").text("You hit the jackpot! 3");
              $("#instructions").text("You won ✨"); // cash += 15*betType;
            } // init_cash();

          }

          column = 0;
          spinning = false;

          if (cash < 0) {
            alert("You lost all your money!");
          } else if (cash >= 10000) {
            alert("Congratulations! You won the game!");
          }

          clearInterval(spinTimer);
        } else {
          column++;
        }
      }
    }, //end of set interval's first argument 
    Math.floor(Math.random() * 30 + 95)); //time in miliseconds
  } //this function is for every button 
  // $("button").on('click touch',function() {
  //     $("#win").text("Win the game by winning $10,000 or more!");
  // });


  $("button.btn-press").on('click touch', function () {
    if (column === 0 && spinning === false) {
      if (cash >= 1) {
        betType = 1;
        cash -= 1; // init_cash();

        $("#instructions").text("Get 3 of a kind in a row to win a jackpot!");
        $("#instructions").css("font-size", "20");
        $("#victoryMessage").empty();
        random_num_spins = [getRandomInt(3, 11), getRandomInt(3, 9), getRandomInt(2, 7)];
        spin();
        spinning = true;
      } else {
        alert("You don't have enough money for that bet");
      }
    }
  });
  $("button.bet10").on('click touch', function () {
    if (column === 0 && spinning === false) {
      if (cash >= 10) {
        betType = 10;
        cash -= 10; // init_cash();

        $("#instructions").text("Get 3 of a kind in a row to win a jackpot!");
        $("#instructions").css("font-size", "20");
        $("#victoryMessage").empty();
        random_num_spins = [getRandomInt(4, 12), getRandomInt(4, 10), getRandomInt(2, 7)];
        spin();
        spinning = true;
      } else {
        alert("You don't have enough money for that bet");
      }
    }
  });
  $("button.bet100").on('click touch', function () {
    if (column === 0 && spinning === false) {
      if (cash >= 100) {
        betType = 100;
        cash -= 100; // init_cash();

        $("#instructions").text("Get 3 of a kind in a row to win a jackpot!");
        $("#instructions").css("font-size", "20");
        $("#victoryMessage").empty();
        random_num_spins = [getRandomInt(5, 13), getRandomInt(5, 11), getRandomInt(2, 7)];
        spin();
        spinning = true;
      } else {
        alert("You don't have enough money for that bet");
      }
    }
  });
});