class Area{
    /**
     * @type {HTMLDivElement} 
     */
    #div
    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass){
        const container = this.#getContainer();
        this.#div = document.createElement("div")
        this.#div.className = cssClass;
        container.appendChild(this.#div);
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
     */
    constructor(cssClass){
        super(cssClass);
    }
}
class QuestionArea extends Area{
    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass){
        super(cssClass);
    }
}