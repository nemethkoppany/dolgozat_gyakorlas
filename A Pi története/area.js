class Area{
    #div 

    constructor(className){
        const container = this.#getContaienr(); 
        this.#div = document.createElement("div");
        this.#div.className = className;
        container.appendChild(this.#div);
    }

   #getContaienr(){
    let container = document.querySelector(".container");
    if(!container){
        container = document.createElement("div");
        container.className = "container"
        document.body.appendChild(container);
    }
    return container;
   }
}

class Table extends Area{
    
}