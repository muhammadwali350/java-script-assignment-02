// -----------chapter 05 ---------- //

// 1. Write a program that take two numbers & add them in a  new variable. Show the result in your browser.

// var firstNumber = parseInt(prompt("Enter First Number : "))
// var secondNumber = parseInt(prompt("Enter Second Number : "))
// var sum = firstNumber + secondNumber
// document.write(" Sum of " + firstNumber + " and " + secondNumber + " is " + sum)
// document.write("<br>")


// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// For Subtraction
// var firstNumber = parseInt(prompt("Enter First Number : "))
// var secondNumber = parseInt(prompt("Enter Second Number : "))
// var subtract = firstNumber - secondNumber
// document.write(" Subtraction of " + firstNumber + " and " + secondNumber + " is " + subtract)
// document.write("<br>")

// For Multiplication 
// var firstNumber = parseInt(prompt("Enter First Number : "))
// var secondNumber = parseInt(prompt("Enter Second Number : "))
// var Multiplication = firstNumber * secondNumber
// document.write(" Multiplication of " + firstNumber + " and " + secondNumber + " is " + Multiplication)
// document.write("<br>")

// Division
// var firstNumber = parseInt(prompt("Enter First Number : "))
// var secondNumber = parseInt(prompt("Enter Second Number : "))
// var Division = firstNumber / secondNumber
// document.write(" Divsion of " + firstNumber + " and " + secondNumber + " is " + Division)
// document.write("<br>")

// Modulus
// var firstNumber = parseInt(prompt("Enter First Number : "))
// var secondNumber = parseInt(prompt("Enter Second Number : "))
// var modulus = firstNumber % secondNumber
// document.write(" Modulus of " + firstNumber + " and " + secondNumber + " is " + modulus)
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")

// 3. Do the following using JS Mathematic Expressions
// var myAge = 23
// document.write("Value after variable declaration is  " + myAge)
// document.write("<br>")
// myAge = 5
// document.write('Initial Value is : ' +  myAge)
// document.write("<br>")
// myAge++
// document.write('Value after increment is  ' +  myAge)
// document.write("<br>")
// myAge = myAge+7
// document.write("Value after addition is : " + myAge)
// document.write("<br>")
// myAge--
// document.write('Value after decrement is  ' +  myAge)
// document.write("<br>")
// myAge = myAge/3
// document.write("The reminder is : " + myAge)

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// var oneTicket = 600
// var costOfFiveTickets = oneTicket*5
// document.write("Total Cost to buy  a 5 tickets to a movie is " + costOfFiveTickets+"PKR") 

// 5. Write a script to display multiplication table of any  number in your browser.
//  var x = parseInt(prompt("Enter any number of your choice : "))
//  for(i=1;i<11;i++){
//     document.write(x +" " + "*" + " " + i + " "+ "=" + " " + x*i)
//     document.write("<br>")
//  }

 // 6. The Temperature Converter:
//  var celsiusTemprature = prompt("Enter a Celsius Temparature")
//  var Fahrenheit =  (celsiusTemprature*9/5)+32;
// document.write(celsiusTemprature+"<sup>0</sup>C " + "is "+Fahrenheit +"<sup>0</sup>F")
// document.write("<br>")
// var FahrenheitTemprature = prompt("Enter a Fahrenheit Temparature")
// var celsius = (FahrenheitTemprature -32)*5/9
// document.write(FahrenheitTemprature+"<sup>0</sup>F " + "is " +celsius + "<sup>0</sup>C")
// document.write("<br>")

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// var itemOnePrice = 650
// var itemSecondPrice = 100
// var itemOneQuantity = 3
// var itemSecondQuantity = 7
// var shippingCharges = 100
// document.write("<h1>Shopping Cart</h1>")
// document.write("price of item 1 is " + itemOnePrice)
// document.write("<br>")
// document.write("Quantity of item 1 is " + itemOneQuantity)
// document.write("<br>")
// document.write("price of item 2 is " + itemSecondPrice)
// document.write("<br>")
// document.write("Quantity of item 2 is " + itemSecondQuantity)
// document.write("<br>")
// document.write("Shipping charges " + shippingCharges)
// document.write("<br>")
// var totalCost =  itemOnePrice*itemOneQuantity+itemSecondPrice*itemSecondQuantity+shippingCharges
// document.write("Total cost of your order is : " +totalCost)

//  8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in  your browser
// var totalMarks = 980
// var MarksObtained = 804
// var percentage = (MarksObtained*100)/totalMarks;
// document.write("Total Marks: " + totalMarks)
// document.write("<br>")
// document.write("Obtained Marks: " + MarksObtained)
// document.write("<br>")
// document.write("percentage: "+ percentage+"%")

// 9. Currency in PKR
// var usDollars = 10
// var saudiRiyals = 25
// usDollars = usDollars*104.80
// saudiRiyals = saudiRiyals*28
// totalCurrency = usDollars+saudiRiyals
// document.write("<h1>Currency in PKR</h1>")
// document.write("<br>")
// document.write("<br>")
// document.write("Total Currency in PKR: " + totalCurrency)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// var num = 35+ 5 *10/2
// document.write(num)

//11. Age Calculator
// var currentYear = prompt("Enter Current year: ")
// var birthYear = prompt("Enter birth year: ")
// var age = currentYear - birthYear
// document.write("Current year :" + currentYear)
// document.write("<br>")
// document.write("Birth year :" + birthYear)
// document.write("<br>")
// document.write("Your age is :" + age)

// 12.  The Geometrizer: Calculate properties of a circle.
// var radius = prompt("What is the radius of a circle? ")
// var circumference = 2*(3.142)* radius
// var area = 3.142 * radius*radius
// document.write("<h1>The Geometerizer</h1>")
// document.write("<br>")
// document.write("Radius of Circle: " + radius)
// document.write("<br>")
// document.write("The Circumference is : " + circumference)
// document.write("<br>")
// document.write("The Area is: " + area)

// 13. The Lifetime Supply Calculator:
// var favouriteSnack = "Chocolate chip"
// var currentAge = 23
// var maximumAge = 40
// var estimatedPerDay = 3
// var needSnacks = (maximumAge - currentAge)* estimatedPerDay;
// document.write("<h1>The Lifetime Supply Calculator</h1>")
// document.write("<br>")
// document.write("favourite Snack: " + favouriteSnack)
// document.write("<br>")
// document.write("Current Age " + currentAge)
// document.write("<br>")
// document.write("Estimated Maximum Age: " +  maximumAge)
// document.write("<br>")
// document.write("Amount of snack pe day: " + estimatedPerDay)
// document.write("<br>")
// document.write("You will need " + needSnacks + " " + favouriteSnack + " to last you untill the ripe old age of " + maximumAge)


// --------------chapter 6 to 9 ---------------- //

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// var a = prompt("Enter any number")
// document.write("Result:")
// document.write("<br>")

// document.write("The Value of a is: "+ a)
// document.write("<br>")
// document.write("..........................................")
// document.write("<br>")
// document.write("<br>")
// ++a
// document.write("The Value of ++a is: "+ a)
// document.write("<br>")
// document.write("Now the value of a is : " + a)
// document.write("<br>")
// document.write("<br>")
// document.write("The Value of a++ is: "+ a)
// document.write("<br>")
// a++
// document.write("Now the value of a is : " + a)
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// --a
// document.write("The Value of --a is: "+ a)
// document.write("<br>")
// document.write("Now the value of a is : " + a)
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// document.write("The Value of a-- is: "+ a)
// a--
// document.write("<br>")
// document.write("Now the value of a is : " + a)

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a =2 , b = 1 
// document.write("a is:" + a)
// document.write("<br>")
// document.write("b is:" + b)
// document.write("<br>")
// result = --a - --b + ++b + b--
// document.write("Result is:" + result)
// document.write("<br>")

// 3. Write a program that takes input a name from user & greet the user.
// var userName = prompt("Please write your name here")
// alert("Hi welcome to our website " + userName)

// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user  does not enter a new number, multiplication table of 5 should be displayed by default.
// var x = prompt("Table of which number do you print")
// for (var i = 1; i<11;i++){
//     document.write(x + " " + "*" + " " + i + " " + "=" + " " + x*i)
//     document.write("<br>")}

// 6. Take
// var subject1 = prompt("Enter First Subject Name ")
// var subject2 = prompt("Enter Second Subject Name ")
// var subject3 = prompt("Enter Third Subject Name ")
// var subject1totalmarks = 100 , subject2totalmarks = 100 , subject3totalmarks = 100
// var totalMarks = subject1totalmarks+ subject2totalmarks+ subject3totalmarks
// var subject1ObtainedMarks =prompt("How many numbers you got in first subject")
// var subject2ObtainedMarks =prompt("How many numbers you got in second subject")
// var subject3ObtainedMarks =prompt("How many numbers you got in thrid subject")
// var totalmarksobtained = subject1ObtainedMarks + subject2ObtainedMarks + subject2ObtainedMarks
// var percentage = (totalmarksobtained * 100) / totalMarks
// var table = document.getElementById('jstable')
// var row = table.insertRow(-1);

// -----------chapter 14 to 16 ------------------ //

//1. Declaration and intialization
// var literalArr = [];
//  //var objectArr = new ("empty")
// var stringArr = [""]
// var numberArr = []
// var boolArr = [true,false]
// var mixedArr = ["hi", 5 , true , , 1]
// var qualificationArr = ["SSC" , "HSC", "BCS", "BS" , "BCOM" , "MS" , "M.PHIL" , "PHD"]
// for(var i=0;i<qualificationArr.length;i++){
//   console.log(qualificationArr[i])
//     document.write("<br>")
// }

// // 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// var stdName = ["Ali" , "Hamza", "Zain"]
// var stdScore = [420 , 380 , 470]
// var totalMarks = 500
// var percentageOfStd1 = ((stdScore[0]* 100)/totalMarks)
// var percentageOfStd2 = ((stdScore[1]* 100)/totalMarks)
// var percentageOfStd3 = ((stdScore[2]* 100)/totalMarks)
// document.write("Score of " + stdName[0] + " is " + stdScore[0] +". " + "Percentage: " + percentageOfStd1 +"%")
// document.write("<br>")
// document.write("Score of " + stdName[1] + " is " + stdScore[1] +". " + "Percentage: " + percentageOfStd2  +"%" )
// document.write("<br>")
// document.write("Score of " + stdName[2] + " is " + stdScore[2] +". " + "Percentage: " + percentageOfStd3  +"%" )

// // 9. Initialize an array with color names. Display the array elements in your browser.
// // 9.
// var colorNames = ["Yellow", " Brown"," Pink"," Orange"," Red"]
// document.write(colorNames)

// //a
// var color = prompt("What color do you add in the starting of an array?")
// colorNames.unshift(color)
// document.write("<br>")
// document.write(colorNames)

// //b
// var color = prompt("What color do you add in the ending of an array?")
// colorNames.push(color)
// document.write("<br>")
// document.write(colorNames)
// document.write("<br>")

// // c
// colorNames.unshift("Grey," ,"White")
// document.write(colorNames)
// document.write("<br>")

// //d 
// colorNames.shift()
// document.write(colorNames)
// document.write("<br>")

// // e
// colorNames.pop()
// document.write(colorNames)
// document.write("<br>")

// // f
// var whichIndex = prompt("In which index you want to add a Color name ?")
// var   addColor = prompt("type a color name which you want to add in a array ? ")
// colorNames.splice(whichIndex , 0, addColor );
// document.write(colorNames)
// document.write("<br>")

// //g
// var indexDelete = prompt("At which index you want to delete a Color name ?")
// var   howManyColors = prompt("how many colors you want to delete in an array ? ")
// colorNames.splice(indexDelete , howManyColors, );
// document.write(colorNames)
// document.write("<br>")

// //10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort  method.

//  var studentScore = [320,230,480,120]
//  document.write("Scores of Students : " + studentScore + "<br>")
//  studentScore.sort();
//  document.write("Scores of Students : " + studentScore)

// //11.Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities  array.
// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
// document.write(cities + "<br>")
// var copied = cities.slice(2,4)
// var selectedCitiesArray = [copied]
// document.write(selectedCitiesArray )
// document.write("<br>")

// //12. Write a program to create a single string from the  below mentioned array:
// var arr = ["This ", " is ", " my ", " cat"];
//  var joinedArr = arr.join(" ");
// document.write(joinedArr)

// // 13.  (FIFO-First In First Out)
// var devices = ["keyboard" , "mouse" , "printer" , "monitor"]
// document.write("Out: " +"<br>" + devices[0] + "<br>" + "Out: " +"<br>" + devices[1] + "<br>" + "Out: " +"<br>" + devices[2] + "<br>" +"Out: " +"<br>" + devices[3] + "<br>" )

// // 14. LIFP  (LIFO-Last In First Out)
// var devices = ["keyboard" , "mouse" , "printer" , "monitor"]
// document.write("Out: " +"<br>" + devices[3] + "<br>" + "Out: " +"<br>" + devices[2] + "<br>" + "Out: " +"<br>" + devices[1] + "<br>" +"Out: " +"<br>" + devices[0] + "<br>" )


// // 15. Write a program to store phone manufacturers 
// var phoneManufacturers = ["Apple" , "Samsung" , "Motrola" , " Nokia" , " Sony" , "Haier"]


// -----------chapter 17 to 20 ------------- //

// 1. Declare and initialize an empty multidimensional array
// var multiArr = [ [] ,[],[]]

// // 2. Declare and initialize a multidimensional array  representing the following matrix:
// var multiArr = [ [0,1,2,3],
// [1,0,1,2],
// [2,1,0,1]]
// document.write(multiArr[0] + "<br>" + multiArr[1] + "<br>" + multiArr[2] + "<br>")

// //3 . Write a program to print numeric counting from 1 to 10.
// for (var i = 1 ; i<=10; i++)
// document.write(i + "<br>")

// // 4.  Write a program to print multiplication table of any  number using for loop. Table number & length should be  taken as an input from user.
// var x = prompt("Enter a number to show its muliplication table:  ")
// var y = prompt("Enter a number of length to show its muliplication table:  ")
// document.write("Multiplication table of " + x + " Length " + y +  " is " + "<br>")
// for(var i = 1 ; i <= y ; i++ ) {
//     document.write(x  + " * " + i + " = " + 2*i + "<br>")
// }

// // 5. Write a program to print items of the following array  using for loop:
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for ( var i = 0 ; i < fruits.length; i++){
//     document.write( fruits[i]+ "<br>")
// }

// // 6. 
// var numbering = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// // a counting
// document.write("Counting: " + numbering + "<br>")

// // b. reverse
// numbering.reverse();
// document.write("Reverse counting: " + numbering + "<br>")

//    // c.   Even
//    for (var  a = 0 ; a < numbering.length; a++) {
//     if(a % 2 != 0){
//    document.write( numbering[a] + " ")
//     }
//  }

// // d. Odd
//  for (var  a = 0 ; a < numbering.length; a++) {
//     if(a % 2 == 0){
//    document.write( numbering[a] + " ")
//     }
// }
// document.write("<br>")

// //e.
// for (var  a = 0 ; a < numbering.length; a++) {
//      if(a % 2 != 0){
//       document.write( numbering[a] + "k ")
//     }
// }

// // 7.  Write a program to enable “search by user input” in an array.
// // After searching, prompt the user whether the given item is found in the list or not. 
//  var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
//  var userSearch = prompt("Welcome to ABC bakery what do you want sir/ma'm ?") 
//  for (var i = 0; i<bakeryItems.length; i++){
//     if (userSearch == bakeryItems[i]){
//         document.write(userSearch + " is available at index " + i + " in our bakery")
//     } 
//     }
   
// // 8. Write a program to identify the largest number in the  given array.
// var array = [24,53,78,91,12]
// document.write( "The largest number is : " + Math.max(...array))
// document.write("<br>")

// // // 9. . Write a program to identify the smallest number in the  given array.
// var array = [24,53,78,91,12]
// document.write( "The smallest  number is : " + Math.min(...array))

//  // 10.  Write a program to print multiples of 5 ranging 1 to 100. 
// for ( i= 1; i <=20; i++)
// document.write(i *5 + "<br>")