"use strict";$(document).ready(function(){var e=!1,s=1e3,i=[["😁","😂","😁"],["😂","😁","😎"],["😎","😎","😂"]];function r(){$("#row1").text(i[0][0]+" "+i[0][1]+" "+i[0][2]),$("#row2").text(i[1][0]+" "+i[1][1]+" "+i[1][2]),$("#row3").text(i[2][0]+" "+i[2][1]+" "+i[2][2])}function t(t,o){return Math.floor(Math.random()*(o-t+1))+t}r();var a=0;function o(){var n=setInterval(function(){if(0<random_num_spins[a]){for(var t=0;t<3;t++)"😁"!==i[t][a]?"😂"!==i[t][a]?"😎"!==i[t][a]||(i[t][a]="😂"):i[t][a]="😁":i[t][a]="😎";r(),random_num_spins[a]--}else if(2==a){for(var o=0;o<3;o++)"😎"===i[o][0]&&"😎"===i[o][1]&&"😎"==i[o][2]&&($("#victoryMessage").text("You hit the jackpot! 3"),$("#instructions").css("font-size","30"),$("#instructions").text("You won ✨")),"😂"===i[o][0]&&"😂"===i[o][1]&&"😂"==i[o][2]&&($("#victoryMessage").text("You hit the jackpot! 3"),$("#instructions").css("font-size","30"),$("#instructions").text("You won ✨")),"😁"===i[o][0]&&"😁"===i[o][1]&&"😁"==i[o][2]&&($("#instructions").css("font-size","30"),$("#victoryMessage").text("You hit the jackpot! 3"),$("#instructions").text("You won ✨"));e=!1,s<(a=0)?alert("You lost all your money!"):1e4<=s&&alert("Congratulations! You won the game!"),clearInterval(n)}else a++},Math.floor(30*Math.random()+95))}$("button.btn-press").on("click touch",function(){0===a&&!1===e&&(1<=s?(s-=1,$("#instructions").text("Get 3 of a kind in a row to win a jackpot!"),$("#instructions").css("font-size","20"),$("#victoryMessage").empty(),random_num_spins=[t(3,11),t(3,9),t(2,7)],o(),e=!0):alert("You don't have enough money for that bet"))}),$("button.bet10").on("click touch",function(){0===a&&!1===e&&(10<=s?(s-=10,$("#instructions").text("Get 3 of a kind in a row to win a jackpot!"),$("#instructions").css("font-size","20"),$("#victoryMessage").empty(),random_num_spins=[t(4,12),t(4,10),t(2,7)],o(),e=!0):alert("You don't have enough money for that bet"))}),$("button.bet100").on("click touch",function(){0===a&&!1===e&&(100<=s?(s-=100,$("#instructions").text("Get 3 of a kind in a row to win a jackpot!"),$("#instructions").css("font-size","20"),$("#victoryMessage").empty(),random_num_spins=[t(5,13),t(5,11),t(2,7)],o(),e=!0):alert("You don't have enough money for that bet"))})});