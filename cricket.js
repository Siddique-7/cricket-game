  let score = { win: 0, lost: 0, tie: 0 };

  // Get score from localStorage and reset if available
  const scoreStr = localStorage.getItem('score');
  if (scoreStr) {
    score = JSON.parse(scoreStr); // Initialize score if available
  }

  // Initialize score display
  function updateScoreBoard() {
    document.getElementById('scoreBoard').innerHTML = `win: ${score.win} lost: ${score.lost} tie: ${score.tie}`;
  }

  // Generate computer choice
  function generateCompChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
      return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
      return 'Ball';
    } else {
      return 'Stump';
    }
  }

  // Determine result based on user and computer choice
  function getResult(userMove, computerMove) {
    if (userMove === 'Bat') {
      if (computerMove === 'Bat') {
        score.tie++;
        return 'It is a Tie.';
      } else if (computerMove === 'Ball') {
        score.win++;
        return 'USER has WON.';
      } else {
        score.lost++;
        return 'COMPUTER has WON.';
      }
    } 
    else if (userMove === 'Ball') {
      if (computerMove === 'Bat') {
        score.lost++;
        return 'COMPUTER has WON.';
      } else if (computerMove === 'Ball') {
        score.tie++;
        return 'It is a Tie.';
      } else {
        score.win++;
        return 'USER has WON.';
      }
    } 
    else {
      if (computerMove === 'Bat') {
        score.win++;
        return 'USER has WON.';
      } else if (computerMove === 'Ball') {
        score.lost++;
        return 'COMPUTER has WON.';
      } else {
        score.tie++;
        return 'It is a Tie.';
      }
    }
  }

  // Show result and update score
  function showResult(userMove, computerMove, result) {
    alert(`You have chosen ${userMove}. Computer choice is ${computerMove}. And ${result}`);

    // localStorage.setItem('key', value);
    localStorage.setItem('score', JSON.stringify(score));  // Save score to localStorage
    updateScoreBoard();  // Update score display
  }

  // Reset button functionality
  document.getElementById('reset').addEventListener('click', function() {
    localStorage.clear();
    score = { win: 0, lost: 0, tie: 0 };  // Reset score
    updateScoreBoard();  // Update score display
  });

  // On page load, update the score display
  window.onload = function(){
    score = { win: 0, lost: 0, tie: 0 };  // Reset score
    updateScoreBoard()
  } 
