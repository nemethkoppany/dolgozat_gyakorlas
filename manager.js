/**
 * @callback NextQiestionCallback
 * @callback NextAnswersCallback
 * @callback FinishCallback 
 */
class Manager{
    /**
     * @type {Question[]}
     */
    #array

    /**
     * @type {number}
     */
    #currentQuestionNumber

    /**
     * @type {NextAnswersCallback}
     */
    #nextAnswersCallback 

    /**
     * @type {NextQiestionCallback }
     */
    #nextQuestionCallback 

    /**
     * @type {FinishCallback }
     */
    #finishCallback 

    /**
     * @type {Object}
     */
    #selectedAnswer 

    /**
     * 
     * @param {Question[]} Question 
     */
    constructor(array = []){
        this.#array = array;
        this.#currentQuestionNumber = 0;
        this.#selectedAnswer = {};
    }

    setNextQuestionCallback(callback){
        this.#nextQuestionCallback = callback;
    }

    setNextAnswersCallback(callback){
        this.#nextAnswersCallback = callback;
    }

    setFinishCallback(callback){
        this.#finishCallback = callback;
    }

    nextQuestion(answer){
        this.#selectedAnswer[this.#currentQuestionNumber] = answer;
        this.#currentQuestionNumber++;

        if(this.#currentQuestionNumber >= this.#array.length){
            this.#nextQuestionCallback(this.#array[this.#currentQuestionNumber].questionText);
            this.#nextAnswersCallback(this.#array[this.#currentQuestionNumber].answer);
        }
        else{
            let counter = 0;
            for(const arr of array){
                if(this.#array[arr].righAnswer === this.#selectedAnswer[arr]){
                    counter++;
                }
            }
            this.#finishCallback(`A kérdéssor véget ért: ${this.#array.length}/${counter} válasz volt helyes`)
        }
    }

    //Ez lehet, hogy nem jó
    start(){
        this.#nextQuestionCallback(this.#array[0].questionText);
        this.#nextAnswersCallback(this.#array[0].answer);
    }
}