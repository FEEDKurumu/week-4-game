var target = 0;
var score = 0;
var crystals = [];
var stats = {
  wins: 0,
  losses: 0
}

function reset() {
  target = Math.ceil(Math.random() * 102) + 18;
  updateTarget();
  score = 0;
  updateScore();
  crystals = [];
  for (var i = 0; i < 4; i++) {
    crystals.push(Math.ceil(Math.random() * 12));
  }
}

function updateTarget() {
  $("#target").html(target);
}

function updateWinLoss() {
  $("#wins").html(stats.wins);
  $("#losses").html(stats.losses);
}

function updateScore() {
  $("#score").html(score);
}

$("button").on("click", function() {
  var add = crystals[$(this).attr("value")];
  score = score + add;
  updateScore();

  if (score === target) {
    stats.wins++;
    updateWinLoss();
    reset();
  }

  if (score > target) {
    stats.losses++;
    updateWinLoss();
    reset();
  }
})

reset();