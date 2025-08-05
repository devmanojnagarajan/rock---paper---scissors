
    let score = JSON.parse(localStorage.getItem('score')) || {
        Wins: 0,
        Losses: 0,
        Ties: 0
      };  
      
      updateScoreElement(); 


      function playGame(userPick) {

        const computerMove = pickComputerMove();
        let result = '';

        if (computerMove === userPick) {
          result = 'Tie.';
        }else if (computerMove === 'paper' && userPick === 'scissors') {
          result = 'You Win!';
        }else if (computerMove === 'paper' && userPick === 'rock' ) {
          result = 'You Lose.';
        }else if (computerMove === 'rock' && userPick === 'scissors') {
          result = 'You Lose.';
        }else if (computerMove === 'rock' && userPick === 'paper') {
          result = 'You Win!';
        }else if (computerMove === 'scissors' && userPick === 'paper') {
          result = 'You Lose.';
        }else if (computerMove === 'scissors' && userPick === 'rock') {
          result = 'You Win!';
        }

        if (result === 'You Win!') {
          score.Wins++;
        }else if (result === 'You Lose.') {
          score.Losses++;
        }else if (result === 'Tie.') {
          score.Ties++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        // alert(`You pick ${userPick}, Computer pick ${computerMove}, ${result}. Total wins ${score.Wins}, Total losses ${score.Losses}, Total ties ${score.Ties}.`);

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerText = `You Picked ${userPick}, Computer Picked ${computerMove}`;

      }  
      


      function  updateScoreElement() {
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.Wins},  Losses : ${score.Losses},  Ties: ${score.Ties}`;
      }

      function pickComputerMove() {        
        
        const randomNumber = Math.random();        
        let computerMove = '';  

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
        }else if (randomNumber >= 2/3 && randomNumber < 1) {
          computerMove = 'scissors';
        }
        return computerMove;
      }    