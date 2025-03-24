class Area{
    /**
     * @type {HTMLDivElement} 
     */
    #div
    /**
     * @type {Manager}
    */
        #manager
    
    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass, manager){
        const container = this.#getContainer();
        this.#div = document.createElement("div")
        this.#div.className = cssClass;
        container.appendChild(this.#div);
        this.#manager = manager;
    }

    get manager(){
        return this.#manager;
    }

    /**
     * 
     * @returns {HTMLDivElement}
     */
    #getContainer(){
        let container = document.querySelector(".container");
        if(!container){
            container = document.createElement("div");
            container.className = "container";
            document.body.appendChild(container);
        }
        return container;
    }

    get div(){
        return this.#div;
    }


}

class AnswerArea extends Area{
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager
     */
    constructor(cssClass,manager){
        super(cssClass,manager);
        manager.setNextAnswersCallback((answer) => {
            this.div.innerHTML = "";
            for(const index of answer){
                const divverino = document.createElement("div");
                divverino.className= "item";
                divverino.innerHTML = index;
                this.div.appendChild(divverino);
            }
        });

    }
}
class QuestionArea extends Area{
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager
     */
    constructor(cssClass,manager){
        super(cssClass,manager);
        manager.setNextQuestionCallback((questionText) => {
            this.div.innerHTML = "";
                const divverino = document.createElement("div"); 
                divverino.innerHTML = questionText;
                this.div.appendChild(divverino);     
        });
        
    }
}