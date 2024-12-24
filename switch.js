let result = 100;
switch(true){
    case((result > 100)) :
    console.log('Invalid');
    break;
    case((result <= 100) && (result >= 80)) :
    console.log('A+');
    break;
    case((result <= 79) && (result >= 70)) :
    console.log('A');
    break;
    case((result <= 69) && (result >= 60)) :
    console.log('A-');
    break;
    case((result <= 59) && (result >= 50)) :
    console.log('B');
    break;
    case((result <= 49) && (result >= 40)) :
    console.log('c');
    break;
    case((result <= 39) && (result >= 33)) :
    console.log('D');
    break;
    default:
        console.log('fail');

};

// Switch condition

let day = 8;
switch(true){
    case(day == 1):
    console.log('Saturday');
    break;
    case(day == 2):
    console.log('Sunday');
    break;
    case(day == 3):
    console.log('Monday');
    break;
    case(day == 4):
    console.log('Tuesday');
    break;
    case(day == 5):
    console.log('Wednesday');
    break;
    case(day == 6):
    console.log('Thursday');
    break;
    case(day == 7):
    console.log('Friday');
    break;
    default:
    console.log('invalidDay');
};