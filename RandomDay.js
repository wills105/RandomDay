/* This JS code will produce an output with a weather statement, random food cloices for the day, and finally a "motivational" reminder. all parts of the statement are ment to be generated randomly*/
const generateDay = () => {
    var randomize = num => {
      return Math.floor(Math.random() * num)
    }; // random number generator
  
  /* The following function will create the weather condition for the program output*/
    let condition = () => {
      let temp = randomize(111); //creates a random temp
      let conditionIndex = randomize(4); //chooses the weather condition
      let windIndex = randomize(2);// decides if windy or not
      let wind = ''
  
      if(windIndex === 0){
        wind = 'windy,'
      } else {
        wind = 'calm with no wind,'
      }; // if/else statement determined by windIndex veriable
  
      if(conditionIndex === 0){
        return `Today will be ${wind} and the temperature will be ${temp} degrees fahrenheit under sunny skies.`
      } else if(conditionIndex === 1) {
        return `Today will be ${wind} and the temperature will be ${temp} degrees fahrenheit under partly cloudy skies.`
      } else if(conditionIndex === 2){
        return `Today will be ${wind} and the temperature will be ${temp} degrees fahrenheit under cloudy skies.`
      } else if(conditionIndex === 3 && temp <= 32){
        return `Today will be ${wind} the temperature will be ${temp} degrees fahrenheit and it's going to snow.`
      } else if(conditionIndex === 3 && temp > 32){
        return `Today will be ${wind} the temperature will be ${temp} degrees fahrenheit and it's going to rain.`
      } // the above statement is chosen at randome by the conditionIndex veriable.
  
    };
    /* the following function will determine the menu portion of the output*/
    const todaysMenu = () => {
      let breakfast = ''; //empty variable for breakfast statement
      let lunch = ''; // empty veriable for lunch statement
      let dinner = ''; // empty vareable for dinner statement
      let breakIndex = randomize(6); // used to determine breakfast
      let lunchIndex = randomize(6); // used to determine lunch
      let dinnerIndex = randomize(6); // used to determine dinner
      switch(breakIndex) {
        case 0:
        breakfast = 'a bowl of cereal';
        break;
        case 1:
        breakfast = 'scrambled eggs and toast';
        break;
        case 2:
        breakfast = 'avocado toast';
        break;
        case 3:
        breakfast = 'biscuits with sausage gravy';
        break;
        case 4:
        breakfast = 'Greek yogurt and fresh fruit';
        break;
        case 5:
        breakfast = 'pancakes'
        break;
      }; // above switch statment determines breakfast
      switch(lunchIndex) {
        case 0:
        lunch = 'something light, like a salad';
        break;
        case 1:
        lunch = 'soup and bread from that place downtown. (You know the one I\'m talking about)';
        break;
        case 2:
        lunch = 'those leftovers from dinner last night';
        break;
        case 3:
        lunch = 'a ham sandwich';
        break;
        case 4:
        lunch = 'a tofu burger with that fake nasty oil based cheese';
        break;
        case 5:
        lunch = 'Taco Bell';
        break;
       }; // above switch statement determines lunch
      switch(dinnerIndex) {
        case 0:
        dinner = 'Spaghetti and meatballs.';
        break;
        case 1:
        dinner = 'steak and a baked potato from Texas Road House.';
        break;
        case 2:
        dinner = 'a cold cut hoagie and chips.';
        break;
        case 3:
        dinner = 'mushroom bordelaise(it\'s French!)';
        break;
        case 4:
        dinner = 'a chicken sandwich and waffle fries from Chic-fil-a.';
        break;
        case 5:
        dinner = 'whatever your mother gives you and you\'re going to LIKE IT!!!';
        break;
      }; // above switch statment determines dinner
  
  return `Your menu today will be as follows: For breakfast you will have ${breakfast}. For lunch, you will have ${lunch}. And finally for dinner you will have ${dinner} Yum!` /* this is the "menu" portion of the output statement*/
    }
  /* below is the function that will provide the motivational reminder statement for the output*/
    const reminder = () => {
      let reminderIndex = randomize(10)
      let statement = '';
  
      switch(reminderIndex){
        case 0:
        statement = 'Don\'t forget to wash your disgusting bedsheets you slob.';
        break;
        case 1:
        statement = 'Your parents were wrong. You will totally be a wealthy YouTuber someday!';
        break;
        case 2:
        statement = 'You were really awkward when you met your friend\’s new boyfriend the other day.';
        break;
        case 3:
        statement = 'Taxation is government sanctioned theft.';
        break;
        case 4:
        statement = 'Only the fast will survive when the zombies show up.';
        break;
        case 5:
        statement = 'Your keys are still in the pocket of the pants you were wearing yesterday.';
        break;
        case 6:
        statement = 'There are over 400 events in the Olympics and you will never be in any of them.';
        break;
        case 7:
        statement = 'There\’s heroes and there\’s legends. Heroes get remembered but legends never die, follow your heart kid, and you\’ll never go wrong.';
        break;
        case 8:
        statement = 'Jenny was an awful person in Forest Gump.';
        break;
        case 9:
        statement = 'You can\’t prove that the world as you know it didn’t just pop into existence last Thursday';
        break;
      } // the above switch statement will determine the reminder
      return `And finally, a quick reminder: ${statement}` // this is the reminder statment
    }
    /* below is the final output statement for the program. It calls all 3 functions and creates the random message*/
    console.log('Thank you for choosing The Random Day Generator!', condition())
    console.log(todaysMenu())
    console.log(reminder(),'Thank you and have a wonderful day!')
  }
  generateDay()
  