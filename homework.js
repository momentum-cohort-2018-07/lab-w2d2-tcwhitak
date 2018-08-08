// 1. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbers) {
  var sumTotal = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumTotal += numbers[i];
  }
  return sumTotal;
}

// 2. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(numbers) {
  if (numbers.length === 0) {
    return;
  } else {
    var sumTotal = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumTotal += numbers[i];
    }
    return sumTotal / numbers.length;
  }
}

// 3. Create a function called "intersection" that takes two arrays and
// returns a new array that contains the elements found in both arrays.
// The order they are in does not matter, but no duplicates should be
// in the returned array, even if they were in the input.

function intersection(array1, array2) {
  var commonElements = [];
  for (var i = 0; i < array1.length; i++) {
    for (var item of array2) {
      if (array1[i] === item) {
        commonElements.push(item);
        break;
      }
    }
  }
  return commonElements;
}

// 4. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(numbers) {
  var min;
  for (var i = 0; i < numbers.length; i++) {
    if (typeof min === "undefined" || numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// 5. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
function selectionSort(nums) {
  //copy orig array and define vars
  var sortedArray = [];
  var numsCopy = nums.slice(0);
  //loop thru copy array
  for (var i = 0; i < nums.length; i++) {
    //find min number
    //insert into output array
    sortedArray.push(minimum(numsCopy));

    //delete from copy array
    numsCopy.splice(numsCopy.indexOf(minimum(numsCopy)), 1);
  }
  //return output array
  return sortedArray;
}

// 6. Create a function called "createUser" that takes a name and a Date object
// and returns an object with the keys "name" and "dob" (date of birth) with
// those values.

function createUser(inputName, inputDate) {
  var newUser = {
    name: inputName,
    dob: inputDate
  };

  return newUser;
}

// 7. Create a function called "calculateAge" that takes a user created from
// createUser and a Date object considered the current date, and calculates the user's
// age in years on that date. You can use your code from yesterday's homework.

// Function from yesterday's HW
// function howOld(birthDate, anotherDate) {
//   if(anotherDate.getTime() < birthDate.getTime()){
//       return
//   } else{
//       return Math.floor((anotherDate.getTime() - birthDate.getTime())/31557600000)
//   }
// }

function calculateAge(newUser, currentDate) {
  if (currentDate.getTime() < newUser.dob.getTime()) {
    return;
  } else {
    return Math.floor(
      (currentDate.getTime() - newUser.dob.getTime()) / 31557600000
    );
  }
}

// 8. Create a function called "addAge" that takes a user created from createUser
// and a Date object and adds a new key on the user object, "age", with the age
// in years the user was on that date.

function addAge(newUser, currentDate) {
  newUser.age = calculateAge(newUser, currentDate);
}

// 9. Create a function called "createUsers" that takes two arrays of equal
// length, the first being a list of names and the second being a list of dates of
// birth, and returns a new array of objects created from those original arrays.

function createUsers(listNames, listDobs) {
  var multiUsers = [];

  for (var i = 0; i < listNames.length; i++) {
    let userObj = {
      name: listNames[i],
      dob: listDobs[i]
    };
    multiUsers.push(userObj);
  }
  return multiUsers;
}

// 10. Create a function called "averageAge" that takes an array of users and
// a Date object and returns the average age in years of the users on that date.
// You do not have to handle the situation in which the current date is before
// a user's date of birth.

//the code below fails the second test for 10
function averageAge(users, currentDate) {
  if (users.length === 0) {
    return;
  } else {
  var ageTotal = 0;
  //add age for each user
  for (var i = 0; i < users.length; i++) {
    let age = Math.floor(
      (currentDate.getTime() - users[i].dob.getTime()) / 31557600000
    );
    ageTotal += age;
  }
  //return sum of users ages and divide by length for average
  return sum(users.age) / users.length;
}
}

