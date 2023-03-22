const mainDiv = document.querySelector('#main');

const containerDiv = document.createElement('div');
containerDiv.id = 'container';

const gamesArea = document.createElement('div');
containerDiv.id = 'gameArea';


const newButton = document.createElement('button');
newButton.id = 'new';
newButton.textContent = '>>>Catch Me If You Can!<<<';


const audioElement = document.createElement('audio');
audioElement.id = 'machiah';

const conteneurDiv = document.createElement('div');
conteneurDiv.id = 'conteneur';

const ecranSection = document.createElement('section');
ecranSection.className = 'gamepad';

const imageElement = document.createElement('img');
imageElement.src = './assets/img/800px-Chabad_Mashiach_Flag.svg.png';

const habadDiv = document.createElement('div');
habadDiv.id = 'habad';

const habadButton = document.createElement('button');
habadButton.className = 'bus';

const habadButtonImg = document.createElement('img');
habadButtonImg.src = './assets/img/bus habad.jpg';

habadButton.append(habadButtonImg);
habadDiv.append(habadButton);
ecranSection.append(imageElement);
ecranSection.append(habadDiv);

const tableauDiv = document.createElement('div');
tableauDiv.className = 'tableau';

const tableElement = document.createElement('table');
tableElement.id = 'afichage';

const tableHead = document.createElement('thead');

const tableHeadRow = document.createElement('tr');

const tableHeadRank = document.createElement('th');
tableHeadRank.textContent = 'Rang';

const tableHeadName = document.createElement('th');
tableHeadName.textContent = 'Nom';

const tableHeadScore = document.createElement('th');
tableHeadScore.textContent = 'Score';

const tableHeadDate = document.createElement('th');
tableHeadDate.textContent = 'Date';

tableHeadRow.appendChild(tableHeadRank);
tableHeadRow.appendChild(tableHeadName);
tableHeadRow.appendChild(tableHeadScore);
tableHeadRow.appendChild(tableHeadDate);
tableHead.appendChild(tableHeadRow);

const tableBody = document.createElement('tbody');

tableElement.appendChild(tableHead);
tableElement.appendChild(tableBody);

const asideScore = document.createElement('aside');
asideScore.id = 'score';
asideScore.textContent = 'Score';

const asidePoints = document.createElement('aside');
asidePoints.id = 'points';
asidePoints.textContent = 'Points to Next Level';

const asideLevel = document.createElement('aside');
asideLevel.id = 'level';
asideLevel.textContent = 'Level';

const asideMissedClicks = document.createElement('aside');
asideMissedClicks.id = 'missed clicks';
asideMissedClicks.textContent = 'Missed Clicks';

const asideTime = document.createElement('aside');
asideTime.id = 'time';
asideTime.textContent = 'Timer';

const asideHighScores = document.createElement('aside');
asideHighScores.id = 'high scores';
asideHighScores.textContent = 'High scores';

tableauDiv.appendChild(tableElement);
tableauDiv.appendChild(asideScore);
tableauDiv.appendChild(asidePoints);
tableauDiv.appendChild(asideLevel);
tableauDiv.appendChild(asideMissedClicks);
tableauDiv.appendChild(asideTime);
tableauDiv.appendChild(asideHighScores);

conteneurDiv.appendChild(ecranSection);
conteneurDiv.appendChild(tableauDiv);

mainDiv.appendChild(containerDiv);
mainDiv.appendChild(newButton);
mainDiv.appendChild(audioElement);
mainDiv.appendChild(conteneurDiv);

// Définition des variables globales
var s = 0;
var score = 0;
var level =5;
var timeLeft = 60;
var seconds = 60; // ou toute autre valeur initiale
var timer;
var scoreElement = document.getElementById("score");
var levelElement = document.getElementById("level");
var timeElement = document.getElementById("time");
var file = 1;
// Définition des constantes
const maxLevel = 10;
const maxSpeed = 20;
const accelerationFactor = 1.2;
const pointsToNextLevel = 10;
const initialSpeed = 1;
const initialIntervalTime = 20;
const animationTimeline = 100;

// Récupération des éléments DOM
var playingArea = document.getElementById("playing-area");
var scoreElement = document.getElementById("score");
var levelElement = document.getElementById("level");
var timeElement = document.getElementById("time");
var gameOverText = document.getElementById("game-over-text");
var habad = document.getElementById("habad");

// Fonction pour faire une pause
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Fonction pour faire échapper la barre
function escapeHabad() {
  habad.style.top = Math.random() * (window.innerHeight - habad.offsetHeight) + "px";
  habad.style.left = Math.random() * (window.innerWidth - habad.offsetWidth) + "px";
}
document.addEventListener("DOMContentLoaded", function() {
  var s = document.getElementById("new");
  s.onclick = function () {
    // code à exécuter au clic sur l'élément
    console.log("button appuye  ** * * * * * * * * ")
  };
});


var level = 1;
let spinDuration = 800; // Durée de l'animation de spin en millisecondes

function increaseLevel() {
  level++;
  spinDuration *= 0.8; // Réduction de la durée de l'animation par un facteur de 0.8
  var habad = document.getElementById('habad');
  habad.className = 'level' + level;
  habad.style.animationDuration = spinDuration + 'ms'; // Modification de la durée de l'animation
  for (var i = 1; i <= 5; i++) {
    var habad = document.querySelector("#habad.level" + i);
    habad.style.animationDuration = (1 / i) + "s";
  }
  
}
function clickHabad() {
  score += level * 10;
  updateScores();
  level++;
  if (level > maxLevel) {
    endGame();
  };
};
// Fonction qui gère le clic en dehors de la barre
function clickOutsideHabad() {
  if (clicksLeft > 0) {
    clicksLeft--;
    score -= level;
    updateScores();
  }
}
// Récupération de l'élément à faire tourner
const element = document.getElementById("habad");
// Définition de l'angle de départ (en degrés)
let angle = 0;
// Fonction pour faire tourner l'élément
function rotate() {
  angle += 2; // Augmente l'angle à chaque appel de 2 degrés
  element.style.transform = "rotate(" + angle + "deg)"; // Applique la rotation à l'élément
  window.requestAnimationFrame(rotate); // Boucle l'animation
}


 

// Fonction pour gérer la fin du jeu
function endGame() {
  clearInterval(timer);
  isGameOver = true;
  habad.style.display = "none";
  gameOverText.style.display = "block";
  alert("Le temps est écoulé ! Votre score est de : " + score);
}

// var myAudio = document.getElementById("new");
// var audio = new Audio("./assets/audio/simha.mp3");



// function playNextTrack() {
//   var myAudio = document.getElementById("new");
//   file ++;
//   myAudio.src = '../assets/audio/simha.mp3' + file ;
//   myAudio.pauseAudio();
//   myAudio.playAudio();
// }

// // Fonction pour jouer l'audio
// function playAudio() {
//   audio.play();
// }
// // Fonction pour mettre en pause l'audio
// function pauseAudio() {
//   audio.pause();
// }

document.addEventListener("DOMContentLoaded", function(event) {
  // Code à exécuter lorsque la page HTML est complètement chargée
  console.log("La page est chargée !");
  // Autres instructions...
});
init();

// Fonction pour initialiser le jeu
function init() {
  // Récupère le bouton "new"
var newBtn = document.getElementById("new");
// Récupère l'élément "habad"
var habad = document.getElementById("habad");
// Ajoute un événement onclick au bouton "new"
newBtn.onclick = function() {
  // Ajoute la classe "level1" à "habad"
  habad.classList.add("level1");
};

sleep();
  score = 0;
  level = 1;
  time = 60; // Définir le temps de départ à 60 secondes
  showTime(); // Afficher le temps restant
  showScore(); // Afficher le score initial
  showLevel(); // Afficher le niveau initial
  createWords(); // Créer les mots pour le niveau initial
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  var highScoresLink = document.getElementById("high-scores-link");
  if (highScoresLink) {
    highScoresLink.onclick = function () {
      showHighScores(highScores);
    };
  }
  startGame();
}
// Fonction pour gérer les clics sur la barre

// Fonction pour démarrer le jeu
function startGame() {
  let btn = document.querySelector("#new");

btn.addEventListener("mouseover", function() {
 	this.textContent = ">>>New game!<<<";
})
btn.addEventListener("mouseout", function() {
 	this.textContent = ">>>Catch Me If You Can!<<<";
})
  // Code pour démarrer le jeu
  score = 0;
  seconds = 60; // Ajout de la variable "seconds" pour la fonction "updateTime"
  var s = document.getElementById("new");
  
  var timeInterval = setInterval(updateTime, 1000);
  isGameOver = false;

  // Attente de la fin du chargement de la page avant d'ajouter l'événement "onclick"
  document.addEventListener("DOMContentLoaded", function() {
    // Création de l'élément playingArea
const playingArea = document.createElement('div');
playingArea.setAttribute('id', 'playingArea');

// Ajout de l'élément playingArea au DOM
const main = document.getElementById('main');
main.appendChild(playingArea);

// Définition du gestionnaire d'événements onclick pour playingArea
playingArea.onclick = function () {
  console.log('area clicked');
};

    playingArea.onclick = function () {
      console.log("area")
        // Créer un élément audio
var audio = new Audio('./assets/audio/simha.mp3');
// Définir la boucle
audio.loop = true;
// Jouer le fichier audio
audio.play();
      rotate();
      increaseLevel();
      clickHabad();
      escapeHabad();
      clickHabad();
      clickOutsideHabad();
      createTarget();
      hitTarget();
      updateScore();
      updateLevel();
      timer = setInterval(updateTimer, 1000); // Démarrer le minuteur
    };
  });
}
// Fonction pour mettre à jour le chronomètre
function updateTime() {
  setTimeout(function () {
    seconds-1;
    document.getElementById("time").innerHTML = "Time: " + seconds;
    if (seconds < 1) {
      stopGame();
    } else {
      updateTime(); // Appel récursif pour mettre à jour le chronomètre
    }
  }, 1000);
}

// // Fonction pour démarrer le jeu
// function startGame() {
//   // Code pour démarrer le jeu
//   score = 0;
//   time = 60;
//   var s = document.getElementById("new");

//  var timeInterval = setInterval(updateTime, 1000);
//   isGameOver = false;
//   playingArea.onclick = function () {
//     console.log("area")
//     rotate();
//     clickHabad();
//     clickOutsideHabad();
//     createTarget();
//     hitTarget();
//     // playNextTrack();
//      timer = setInterval(updateTimer, 1000);// Démarrer le minuteur
//   };
// };
// Fonction pour afficher le score
function showScore() {
  scoreElement.innerHTML = "Score : " + score;
}
// Fonction pour afficher le niveau
function showLevel() {
  levelElement.innerHTML = "Niveau : " + level;
}
// Fonction pour afficher le temps restant
function showTime() {
  timeElement.innerHTML = "Temps restant : " + timeLeft + "s";
}

function createWords() {
  // Générer un tableau de mots aléatoires pour le niveau initial
  const words = ['tefilin', 'sidour', 'houmach', 'tania', 'talit'];
  // Mélanger le tableau aléatoirement
  words.sort(() => Math.random() - 0.5);
  // Retourner les premiers mots du tableau
  return words.slice(0, 3);
}
// Fonction pour mettre à jour le score
function updateScore() {
  score++;
showScore();
scoreElement.innerHTML = "Score : " + score;
}
// Fonction pour mettre à jour le niveau
function updateLevel() {
  level++;
  levelElement.innerHTML = "Niveau : " + level;
}

// function createTarget() {
//   var target = document.createElement("div");
//   target.classList.add("target");
//   container.appendChild(target);

//   var containerWidth = Gamepad.clientWidth;
//   var targetSize = target.offsetWidth;
//   var left = Math.floor(Math.random() * (containerWidth - targetSize));
//   var top = Math.floor(Math.random() * (containerHeight - targetSize));

//   target.style.left = left + "px";
//   target.style.top = top + "px";

//   target.addEventListener("click", function() {
//     target.remove();
//     score++;
//     scoreDisplay.textContent = score;
//   });

//   setTimeout(function() {
//     if (target.parentNode === container) {
//       target.remove();
//     }
//   }, 1000);
// }
// // Fonction pour gérer le clic sur la cible
// function hitTarget() {
//   // Augmenter le score
//   score += 10;
//   updateScore();
//   // Supprimer la cible
//   container.removeChild(target);
//   // Passer au niveau suivant si le score atteint un multiple de 50
//   if (score % 50 == 0) {
//     level++;
//     updateLevel();
//   }
// }
// Fonction pour mettre à jour le minuteur
function updateTimer() {
  timeElement.innerHTML = "Temps : " + time;
  var timerElement = document.getElementById("timer");
  time--;
  timeLeft--;
  showTime();
  // timerElement.innerHTML = time;
  if (timeLeft === -1) {
    endGame();
    if (time <= -1) {
    clearInterval(timerInterval);
    gameOver();
  }
  // Diminuer le temps restant
  time--;
  // Afficher le temps restant
  // timerElement.innerHTML = time;
  // Terminer le jeu si le temps est écoulé
  if (time == 0) {
    clearInterval(timer);
    alert("Temps écoulé ! Votre score est de " + score);
  }
} 
};
  // // Sélectionner la zone de jeu et la balle
  // const gameArea = document.querySelector('#game-area');
  // var ball = document.querySelector('#ball');

//   // Attendre que la page soit chargée
// window.addEventListener('load', () => {
//   // Obtenir l'élément gameArea
//   const gameArea = document.getElementById('gameArea');
//   // Vérifier si l'élément existe
//   if (!gameArea) {
//     console.error('L\'élément "gameArea" n\'existe pas.');
//     return;
//   };
// });


// function resetGame() {
//   let score = 0; // initialiser les variable ici
//   time = 60;
//   level = 1;
//   habadSpeed = 1000;
//   escapeTime = 300;
//   document.getElementById('score').innerText = score;
//   document.getElementById('time').innerText = time;
//   document.getElementById('level').innerText = level
//   level = 1;
//   clicksLeft = 10;
//   timeLeft = 60;
//   console.log("reset")
// }
// Fonction pour arrêter le jeu
function stopGame() {
    // Réactiver le bouton Start Game
    document.getElementById("new").disabled = false;
    // Vérifier si le score est dans le top cinq
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    if (highScores.length < 5 || score > highScores[4].score) {
      let name = prompt("You made it to the top five! Enter your name:");
      let date = new Date().toLocaleDateString();
      let newScore = { name: name, date: date, score: score };
      let finalScore = score - (10 * (10 - clicksLeft));
  alert('Game over! Your score is ' + finalScore);
  checkHighScore(finalScore);
  console.log("endGame")
      highScores.push(newScore);
      highScores.sort(function(a, b) {
        return b.score - a.score;
      });
      highScores = highScores.slice(0, 5);
      localStorage.setItem("highScores", JSON.stringify(highScores));
      updateHighScores();
    }
  function showHighScores(highScores) {
    // Vérifiez que highScores est un tableau avant de l'utiliser
    if (Array.isArray(highScores)) {
      // Triez le tableau en fonction des scores décroissants
      highScores.sort(function (a, b) {
        console.log("is array")
        return b.score - a.score;
      });
      // Affichez les scores triés
      var scoresList = document.getElementById("high-scores-list");
      scoresList.innerHTML = "";
      for (var i = 0; i < highScores.length; i++) {
        var scoreItem = document.createElement("li");
        scoreItem.innerText = highScores[i].name + " - " + highScores[i].score;
        scoresList.appendChild(scoreItem);
        showHighScores(highScores);
      }
    }
  }
  // Arrêt du chronomètre
  clearInterval(timer);
  // Affichage du message de fin de jeu
  var pad = document.getElementById("gamepad");
if (pad) {
  pad.innerHTML += `<button onclick="startGame()">Play Again</button>`;
  pad.innerHTML += `<h1>Game Over</h1>`;
  pad.innerHTML += `<p>Your score: ${score}</p>`;
  pad.innerHTML += `<p>Missed clicks: ${missedClicks}</p>`;
  pad.innerHTML += `<button onclick=${startGame()}>Play Again</button>`;
}

  // Réinitialisation des variables globales
  // Réinitialisation des variables globales
  // resetGame();
  let pointsToNextLevel = 10;
  let level = 1;
  let missedClicks = 0;
  let seconds = 60;
  

}
// Fonction pour mettre à jour le tableau des cinq meilleurs marqueurs et enregistrer les données dans le local storage
function updateScores() {
  // Récupération des scores existants dans le local storage
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  // Ajout du score actuel au tableau des scores
  highScores.push({
    score: score,
    level: level,
    time: seconds
  });
  // Tri des scores en ordre décroissant
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  // Suppression des scores excédant cinq éléments
  highScores.splice(5);
  // Mise à jour de l'affichage des scores
  var table = document.getElementById("high-scores");
  var html = "<tr><th>Rank</th><th>Score</th><th>Level</th><th>Time</th></tr>";
  for (var i = 0; i < highScores.length; i++) {
    html += "<tr><td>" + (i + 1) + "</td><td>" + highScores[i].score + "</td><td>" + highScores[i].level + "</td><td>" + highScores[i].time + "s</td></tr>";
  }
  console.log("updateScore")
// Tri des scores en ordre décroissant
 highScores.sort(function (a, b) {
  return b.score - a.score;
});
// Suppression des scores excédant cinq éléments
highScores.splice(5);
// Enregistrement des scores dans le local storage
localStorage.setItem("highScores", JSON.stringify(highScores));
// Vérification si le score actuel est parmi les cinq meilleurs marqueurs
var isHighScore = false;
for (var i = 0; i < highScores.length; i++) {
  if (score === highScores[i].score && level === highScores[i].level && seconds === highScores[i].time) {
    isHighScore = true;
    break;
  }
}
// Affichage du message si le score est parmi les cinq meilleurs marqueurs
if (isHighScore) {
  alert("Congratulations! You made it to the high scores list!");
}
console.log("checkHighScore")
}
// Fonction pour ajouter un nouveau score dans le tableau des cinq meilleurs marqueurs
function addScoreToTable(scores, score) {
  var length = scores.length;
  var index = -1;
  for (var i = length - 1; i >= 0; i--) {
    if (score > scores[i]) {
      index = i;
    }
  }
  if (index > -1) {
    scores.splice(index, 0, score);
    if (length >= 5) {
      scores.pop();
    }
    localStorage.setItem("highScores", JSON.stringify(scores));
  }
}
// Fonction pour afficher le tableau des cinq meilleurs marqueurs
function showHighScores(scores) {
  var table = "<table><tr><th>Rank</th><th>Score</th></tr>";
  for (var i = 0; i < scores.length; i++) {
    table += "<tr><td>" + (i + 1) + "</td><td>" + scores[i] + "</td></tr>";
  }
  table += "</table>";
  var container = document.getElementById("scores");
  container.innerHTML = "<h1>High Scores</h1>";
  container.innerHTML += table;
  container.innerHTML += "<button onclick='startGame()'>Play Again</button>";
}
// Fonction pour vérifier si le score est suffisant pour être ajouté au tableau des cinq meilleurs marqueurs
function checkHighScore(score) {
  var scores = JSON.parse(localStorage.getItem("highScores")) || [];
  if (scores.length < 5 || score > scores[scores.length - 1]) {
    addScoreToTable(scores, score);
    showHighScores(scores);
  } else {
    alert("Sorry, your score is not high enough to make the high scores list.");
    startGame();
  }
}