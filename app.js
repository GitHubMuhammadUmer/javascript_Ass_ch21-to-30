//-----------------Ch 17-20 Array & Loop-----------------------

//---------------------Q.1------------------
// var MultidimensionalArray = [];
// MultidimensionalArray[0] = [];
// MultidimensionalArray[1] = [];
// console.log(MultidimensionalArray);

//---------------------Q.2------------------
// var array = [
// [0,1,2,3], 
// [1,0,1,2], 
// [2,1,0,1]
// ]
// document.write(array )

//---------------------Q.3------------------

// for(i=1 ; i <=10 ; i++){
//     console.log(i)
// }

//---------------------Q.4------------------

// var  tableNumber = +prompt("Enter Table Number");
// var tableLength =  +prompt("Enter Table Length");
// for(i=1; i<=tableLength; i++ ){
//     console.log(tableNumber + "x" + i + "=" + i*tableNumber + "</br>")
// }

//---------------------Q.5------------------
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
//     for(var i=0; i<fruits.length ; i++){
//         console.log(fruits[i])
//     }

//---------------------Q.6------------------
              //----------a----------
// document.write("Counting :" )
// for(var i=1; i<= 15; i++){
//     document.write(i + ",")
// }

             //----------b----------

// document.write( "</br>" + "Reverse Counting:")
// for(var j=10; j>= 1; j--){
//     document.write(j + ",")
// }
              //----------c---------- 

// document.write( "</br>" + "Even:")
// for(var k=0; k<=20; k++){
// if(([k] % 2) != 1){
//     document.write(k + ",") 
// }
// }

            //----------d----------
// document.write( "</br>" + "Odd:")
// for(var o=0; o<=20; o++){
   
// if(([o] % 2) === 1){
//     document.write(o + ",") 
// }
// }

           //----------e----------
// document.write( "</br>" + "Series:")
// for(var s=2; s<=20; s++){
   
// if(([s] % 2) != 1){
//     document.write(s + "k"+ ",") 
// }
// }



//---------------------Q.7------------------

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Wellcome To ABC Bakery. What DO You Want To Order Sir/Ma'am?")
// var found = A.indexOf(userInput ) ;
// if(found !== -1){
//     document.write(userInput + " is <b>available</b> at index  " + found + "  in our bakery")
// }else{
//     document.write("we are sorry."+ userInput+ "is <b>available</b> in our bakery" )
// }



//---------------------Q.8------------------

// for(i=1; i<=100; i++ ){
//     if(([i] % 5) === 0)
//     document.write(i+ ",")
// }


//---------------------Q.9------------------

// var A = [24, 53, 78, 91, 12]

// var largestNumber = A[0];
// for(var i = 1; i < A.length; i++ ){
//     if(A[i] > largestNumber){
//         largestNumber = A[i]
//     }
// }
// document.write("Array items: " + A + "</br>")
// document.write("The largest number is: " + largestNumber);


//---------------------Q.10------------------

// var A = [24, 53, 78, 91, 12]

// var smallestNumber = A[0];
// for(var i = 1; i < A.length; i++ ){
//     if(A[i] < smallestNumber){
//         smallestNumber = A[i]
       
//     }
   
// }


//---------------------Q.10------------------

// document.write("Array items: " + A + "</br>")
// document.write("The Smallest number is: " + smallestNumber);










//-----------------Ch 21-25 String Methods-----------------------

//---------------------Q.1------------------

// var  firstName = prompt("Enter Your First Name");
// var lastName =  prompt("Enter Your First Name");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");

//---------------------Q.2------------------

// var moblieName = prompt("Enter Your Favorite Mobile Phone Name");
// document.write("My Favorite Mobile Phone Is:" + " "+ moblieName + "</br>" + "Length Of The String:" + " "+ moblieName.length)

//---------------------Q.3------------------

// var nationality = "Pakitani"
// document.write("String:" + " " + nationality + "</br>" + "Index Of 'n':" + " " + nationality.indexOf("n"))

//---------------------Q.4------------------

// var word = "Hello World"
// document.write("String:" + " " + word + "</br>" + "Index Of 'l':" + " " + word.lastIndexOf("l"))

//---------------------Q.5------------------

// var nationality = "Pakitani"
// document.write("String:" + " " + nationality + "</br>" + "Character at index 3:" + " " + nationality.charAt(3))

//---------------------Q.6------------------

// var  firstName = prompt("Enter Your First Name");
// var lastName =  prompt("Enter Your First Name");
// var fullName = firstName.concat(" ",lastName)
// alert("Hello, " + fullName + " Welcome");

//---------------------Q.7------------------

// var city = "Hyderabad";
// document.write("City : " + " " + city + "</br>" + "After Replacement :" + " " + city.replace("Hyderabad","Islamabad") )

//---------------------Q.8------------------

// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// document.write("Message:" + " " + message +  "</br>" + "After Replacement :" + message.replace("and", "&"))

//---------------------Q.09------------------

// var value = "472";
// document.write("value:"+" " + value +  "</br>" + typeof(value)  +  "</br>")
// var num = Number(value)
// document.write("value:"+" " + num  +  "</br>")
// document.write(typeof(num))

//---------------------Q.10------------------

// var userInput = prompt("Type Any Things")
// document.write(userInput.toUpperCase())

//---------------------Q.11------------------

// var userInput = prompt("Type Any Things")
// document.write(userInput.toLocaleLowerCase())


//---------------------Q.12------------------

// var num = "35.36"
// document.write("Number : " + " " + num + "</br>" + " Result :" + num.toString().replace(".",""))

//---------------------Q.13------------------

// var userName = prompt("Enter A Name");
// var specialCharacters =  /[!@#$%^&*(),.?":{}|<>]/.test(userName);
// if(specialCharacters ){
// alert("Please enter a valid username without special symbols [!@#$%^&*(),.?:{}|<>]/.");

// }else{
//     alert("User Name Is Vaild : " + userName);
// }

//---------------------Q.14------------------

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Wellcome To ABC Bakery. What DO You Want To Order Sir/Ma'am?")
// var lowerCaseUserInput = userInput.toLowerCase();
// var found = A.indexOf(lowerCaseUserInput ) ;
// if(found !== -1){
//     document.write(lowerCaseUserInput  + " is <b>available</b> at index  " + found + "  in our bakery")
// }else{
//     document.write("we are sorry."+lowerCaseUserInput + "is <b>available</b> in our bakery" )
// }


//---------------------Q.15------------------

// var userPassword = prompt("Enter Password. </br> Password Should Be  a-z, A-Z & 0-9")
// var Alphabets = /[a-zA-Z]/.test(userPassword);
// var Numbers = /\d/.test(userPassword);
// var SpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(userPassword);
// var startsAlphabet = /^[a-zA-Z]/.test(userPassword);
// var passwordLength = userPassword.length >=6; 
// document.write("Enter A Password: " + userPassword + " ")
// if(Alphabets && Numbers && SpecialCharacters && startsAlphabet && passwordLength){
//     document.write("Password Is Vaild")
// }else{
//     // if(!startsAlphabet ){
//     //     document.write("Password Not Vaild. Use First Letter Of Password With Alphabet")

//     // }else if(!Alphabets){
//     //     document.write("Password Not Vaild. Use A Password With Alphabet")
//     // }else if(!SpecialCharacters){
//     //     document.write("Password Not Vaild. Use A Password With Special Characters")
//     // }else if(!Numbers){
//     //     document.write("Password Not Vaild. Use A Password With Numbers")
//     // }else if(!passwordLength){
//     //     document.write("Password Not Vaild. Use Password at least  6 characters long")
//     // }else{
//         document.write("Password Not Vaild")
// }


//---------------------Q.15------------------

// // var userInput = +prompt("Enter");
// // console.log(userInput);
// // console.log("Last character of input :" + userInput.lastIndexOf());

// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be")
// console.log(segIndex)


// var value = "The quick brown fox jumps over the lazy dog";
// var countIndex = value.lastIndexOf("The")
// document.write(countIndex)




//-----------------Ch 26-30 Math Methods-----------------------


//---------------------Q.1------------------

// var num = +prompt("Enter Postive Integer");
// console.log("Number:" + " " + num);
// console.log("Round Of Value:" + " " + Math.round(num));
// console.log("Floor Value:" + " "+Math.floor(num))
// console.log("Ceil Value:" + " " + Math.ceil(num))

//---------------------Q.2------------------


// var num = +prompt("Enter Negative Integer");
// console.log("Number:" + " " + num);
// console.log("Round Of Value:" + " " + Math.round(num));
// console.log("Floor Value:" + " "+Math.floor(num))
// console.log("Ceil Value:" + " " + Math.ceil(num))

//---------------------Q.3------------------

// var num = +prompt("Enter Number");
// var absoulteValue = Math.abs(num)
// console.log("The Absolute Value Of" + absoulteValue + "is" + num)

//---------------------Q.4------------------

// var dice = Math.floor(Math.random()*6)+1;
// console.log(dice)


//---------------------Q.5------------------


// var dice = Math.floor(Math.random()*2)+1;
// if(dice===1){
//     console.log("Heads")
// }else if(dice===2){
//     console.log("Tails")
// }

//---------------------Q.6------------------

// var dice = Math.floor(Math.random()*100)+1;
// console.log("Random Number Between 1 and 100:" + dice)

//---------------------Q.7------------------


//---------------------Q.8------------------

// var num = prompt("Enter a number between 1 and 10");
// var secretNumber = 6;

// if(num === secretNumber){
//     alert("You Guess A Secret")

// }else{
//     alert("Try Again!")
// }

