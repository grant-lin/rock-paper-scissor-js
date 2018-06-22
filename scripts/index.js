$(document).ready( function() {
  //should you define these following variables else where? like inside the
  //playGame function? What are the pros and cons?
  var playerChoice;
  var botChoice;
  var playerScore = 0;
  var botScore = 0;


  //general notes from class: if you can't figure something out while coding, 
  //have a placeholder or create 'fake data' so at least you queue the issue
  //till later.
  //you might get more insights if you skip the hard part first to have more
  //inspiration for how to solve the hard part more efficiently
  var playerWins = function () {
    $('#match-result').append('<br>Congrats! You won!!');
    playerScore ++;
    //update scoreboard
    $('#playerScore').text(playerScore);
  }

  var botWins = function () {
    $('#match-result').append('<br>You lost :(');
    botScore ++;
    //update scoreboard
    $('#botScore').text(botScore);
  }

  var playGame = function () {
    //remove all classes (in this case, background-image is removed)
    $('#playerWeapon').removeClass($('#playerWeapon').attr('class'));
    $('#botWeapon').removeClass($('#botWeapon').attr('class'));

    //assign playerChoice to the buton clicked
    playerChoice = $(this).text().toLowerCase();
    $('#match-result').text('You picked ' + playerChoice);
    //change the bg-img to the choice
    $('#playerWeapon').addClass(playerChoice);

    //bot picks a random choice
    botChoice = $('#pick-your-weapon button:nth-child(' + Math.floor(Math.random() * 3 + 1) + ')').text().toLowerCase();
    $('#match-result').append(', and Bot picked ' + botChoice + '.');
    //change the bg-img to the choice
    $('#botWeapon').addClass(botChoice);

    //comparison, too much repetition here. This can probably be optimized.
    switch (playerChoice) {
      //if tied
      case botChoice:
        $('#match-result').append('<br>It is a tie.');
        break;
      //if player chooses scissors
      case 'scissors':
        if (botChoice === 'rock') {
          botWins();
        } else {
          playerWins();
        }
        break;
      //if player chooses rock
      case 'rock':
        if (botChoice === 'paper') {
          botWins();
        } else {
          playerWins();
        }
        break;
      //if player chooses paper
      //you don't have to have a default case here!!!!!!!!!!
      case 'paper':
        if (botChoice === 'scissors') {
          botWins();
        } else {
          playerWins();
        }
    }
  }

  $('#pick-your-weapon button').click(playGame);
});



