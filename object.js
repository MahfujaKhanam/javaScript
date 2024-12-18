// object declar
let person = {
    firstName : 'Julykha',
    lastName : 'Begum',
    age : 29,
    isAdmin : true
};
// add data
person.nationality = 'Bangladeshi';

// update data
person.firstName = 'rose';

// delete data
delete person.lastName;

// bracket notation
let userName = person['firstName'];

// dot notation
let name = person.firstName;
console.log(person);




// let car = {
//     founder : 'August',
//     Brand : 'Audi',
//     // nested object declar
//     model : {
//         modelA4 : {
//             color : 'red',
//             price : 6000000
//         },
//         modelA5 : {
//             color : 'black',
//             price : 7000000
//         },
//         modelA6 : {
//             color : 'white',
//             price : 8000000
//         },
       
//     }
// };

// let carModel = car['model']?.['modelA6']?.['price'];
// console.log(carModel);
