class Question{
    /**
     * @type {string} 
     */
    #questionText
    /**
     * @type {string} 
     */
    #answers
    /**
     * @type {string[]}
     */
    #rightAnswer

    get getQuestionText(){
        return this.#questionText;
    }

    get getAnswers(){
        return this.#answers;
    }

    get getRightAnswer(){
        return this.#rightAnswer;
    }

    /**
     * 
     * @param {string} questionText 
     * @param {string[]} answers 
     * @param {string} rightAnswer 
     */
    constructor(questionText, answers, rightAnswer){
        this.#questionText = questionText;
        this.#answers = answers;
        this.#rightAnswer = rightAnswer;
    }
}