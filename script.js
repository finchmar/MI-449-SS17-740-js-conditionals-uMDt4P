var button = document.getElementById('normalWalk')

button.addEventListener('click', function () {
  var direction = window.prompt('If you had to pick a direction to walk ' +
  'what way would it be? ' + '(Left, Right, or Straight?)')
  if (direction) {
    direction = direction.toLowerCase().trim()
    if (direction === 'left') {
      var stick = window.prompt('You walk down the path and notice a stick on the ground. ' +
      '(Pick up or Walk past?)')
      if (stick) {
        stick = stick.toLowerCase().trim()
        if (stick === 'pick up') {
          var dog = window.prompt('A dog runs up to you. (Throw or Ignore)')
          if (dog) {
            dog = dog.toLowerCase().trim()
            if (dog === 'throw') {
              window.alert('You made a new friend. ' +
              'You play catch with the dog all day.')
            } else if (dog === 'ignore') {
              window.alert('The dog looks sad and walks away.' +
              ' A tear runs down your face.')
            } else {
              window.alert('I\'m sorry. your input was wrong please play again.')
            }
          } else {
            window.alert('Whoops.. you did something you shouldn\'t have.')
          }
        } else if (stick === 'walk past') {
          var question = window.prompt('As you keep walking down the path someone yells over ' +
          'to you and asked if you can help them with a math problem.. ' +
          '(Question: 4 * X = 24?)')
          if (question) {
            question = question.trim()
            var answer = 4 * question
            if (answer === 24) {
              window.alert('4 * 6 = 24... CORRECT! YOU GET A GOLD STAR!')
            } else if (answer < 24 || answer > 24) {
              window.alert('4 * ' + question + ' = 24... WRONG! 4 * ' + question +
              ' = ' + answer + '....')
            } else {
              window.alert('I\'m sorry that isn\'t a number..')
            }
          } else {
            window.alert('You stand there silent. ' +
            ' You start to slowly back up and leave.')
          }
        } else {
          window.alert('Whoops.. you did something you shouldn\'t have.')
        }
      } else {
        window.alert('I\'m sorry. your input was wrong please play again.')
      }
    } else if (direction === 'right') {
      var object = window.prompt('You see a desk with a pair of scissors ' +
      'and piece of paper on it. ' + 'Which one do you pick up? ' +
      '(Scissors or Paper)')
      if (object) {
        object = object.toLowerCase().trim()
        if (object === 'scissors') {
          window.alert('Oops...They had ROCK you lose...')
        } else if (object === 'paper') {
          window.alert('YAY! They had ROCK you win!')
        } else {
          window.alert('I\'m sorry. your input was wrong please play again.')
        }
      } else {
        window.alert('Whoops.. you did something you shouldn\'t have.')
      }
    } else if (direction === 'straight') {
      var randomNumber = Math.random()
      if (randomNumber <= 0.33) {
        window.alert('You see the red hand and wait to cross the street ' +
        'for it to go green... But it never does...')
      } else if (randomNumber < 0.66) {
        window.alert('You look down while waiting for the red hand to go green ' +
        'to cross the street and notice a 20 dollar bill! It\'s your lucky day!')
      } else {
        window.alert('The light turns green and you cross the street safely')
      }
    } else {
      window.alert('I\'m sorry. your input was wrong please play again.')
    }
  } else {
    window.alert('Whoops.. you did something you shouldn\'t have.')
  }
})
