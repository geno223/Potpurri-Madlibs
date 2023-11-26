let words = {
    number: "",
    adj: "",
    pluralNoun: "",
    adverb: "",
    anotherAdj:"",
}
let questionsArr =["give me a number", "give me an adj", "give me a plural noun", "give me an adverb", "give me another adj"] 
let answers = []

let startMadLib = () => {
    for(let i = 0;i < questionsArr.length; i++ ){
      let questionsAnswered = prompt(questionsArr[i])
    answers.push(questionsAnswered)
    }
}

startMadLib()
//consol.log(answers)
wordsAnwsers = ()=> {
    words.number = answers[0]
    words.adj = answers[1]
    words.pluralNoun = answers[2]
    words.adverb = answers[3]
    words.anotherAdj= answers[4]

}
wordsAnwsers()
console.log(words)

let story = () => {
    alert("Once upon a time a group of" + words.number + "General Assembly graduates got together and made a startup called" + words.adj + "Technologies.Their goal was to create smart" + words.pluralNoun + "They approached the challenge" + words.adverb + "which ultimately lead them to" + words.anotherAdj + "fame."
    )
}
story()