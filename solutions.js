 //setAlarm answered 

 //Write a function named setAlarm that has two arguments.
//The first argument: employed ; The second argument: vacationing
 
 setAlarm =(employed, vacationing) => { //creating setAlarm function with parameters 'employed'&'vactioning'
    if (employed && !vacationing) {  // checks the values of "employed" and "vacationing"
        console.log(true);
    } else {
        console.log(false);
    }
}
setAlarm(true, true) // => returns false
setAlarm(false, false) // => returns false
setAlarm(false, true) // => returns false
setAlarm(true, false) // => returns true

//Count Odd Numbers answered ?????????????????????
//Write a function named oddNumberCount which receives one argument that should be a number. 
//The function should return how many positive odd numbers there are below the number passed into the argument.

function oddNumberCount (number){   //creating function called oddNumberCount, with parametr being 'number'
const arr = []
 for(let i = 1; i < number; i+=2){   // for loop that iterates, as long as condition 'i<number' is true
    arr.push(i)
    }
    console.log(arr.length)// counts # through array
}
oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)


//Disemvoweling trolls answered
const trollBeGone = (sentence) => {
   // let newSentence = sentence.replace("a", "") //sentence - & replace vowels with notbhing
   let newSentence = sentence.replace(/a|e|i|o|u/ig, "" )// reg expr to look for any of these values capital or not (using 'ig')globally in a sentence
    console.log(newSentence)
}
trollBeGone("This website is for losers LOL")
   

//Bank Account Summary

let bankInfo= {
    savings: 500,
    checkings: 5,
    moneyMarket: 1,
    creditCard: 100,

}

let bankAcountSummary = (bankInfo) => {
    let sum = bankInfo.savings + bankInfo.checkings + bankInfo.moneyMarket + bankInfo.creditCard

    console.log(sum)
}

//bankAcountSummary(bankInfo)

let bankTotal = bankAcountSummary(bankInfo)

let inTheRed = (bankTotal) => {
    if(bankTotal < 0){
        console.log(true)
    }else {
    console.log(false)
    }
}

inTheRed(bankTotal)



