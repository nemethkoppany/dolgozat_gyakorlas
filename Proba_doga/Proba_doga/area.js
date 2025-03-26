class Area{
    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @type {Manager}
     */
    #manager;

    /**
     * @type {Manager}
     */
    get manager(){
        return this.#manager;
    }

    /**
     * @returns {HTMLDivElement}
     */
    get div(){
        return this.#div;
    }

    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass, manager){
        this.#manager = manager;
        const container = this.#getContainer();
        this.#div = document.createElement("div");
        this.#div.className = cssClass;
        container.appendChild(this.#div);
    }

    /**
     * Megnezi va e már container
     * @returns {HTMLElement}
     */
    #getContainer(){
        let container = document.querySelector(".container");
        if(!container){
            container = document.createElement("container");
            container.className = "container";
            document.body.appendChild(container);
        }
        return container;
    }
}

class Table extends Area{
    
    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass, manager){
        super(cssClass, manager);
        const tbody = this.#createTableHeader();
        this.manager.setAddCallback(author =>{
            const tr = document.createElement("tr");
            tbody.appendChild(tr);
            this.#makeCellToRow(tr, author.nev);
            this.#makeCellToRow(tr, author.szamjegyekszama);
            this.#makeCellToRow(tr, author.szazad);
        })
    }

    /**
     * A tablazat fejlécéért felelős
     */
    #createTableHeader(){
        const table = document.createElement("table");
        this.div.appendChild(table);
        
        const thead = document.createElement("thead");
        table.appendChild(thead);

        const theadrow = document.createElement("tr");
        thead.appendChild(theadrow);

        const fejlec = ["Nev", "Szamjegyek szama", "Század"];
        for(const elem of fejlec){
            const th = document.createElement("th");
            th.innerHTML = elem;
            theadrow.appendChild(th);
        }
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        return tbody;
    }

    /**
     * 
     * @param {tr} tablerow 
     * @param {string} content 
     */
    #makeCellToRow(tablerow, content){
        const tablecell = document.createElement("td");
        tablecell.textContent = content;
        tablerow.appendChild(tablecell);
    }

    

}

class Form extends Area{

    /**
     * @type {Array}
     */
    #formFieldArray;

    /**
     * 
     * @param {string} cssClass 
     * @param {Array} fields 
     * @param {Manager} manager 
     */
    constructor(cssClass, fields, manager){
        super(cssClass, manager);
        this.#formFieldArray = [];
        this.#createForm(fields);
        
    }

    /**
     * 
     * @returns {Object}
     */
    getValueObject(){
        const result = {};
        for(const field of this.#formFieldArray){
            result[field.id] = field.value;
        }
        return result;
    }

    /**
     * 
     * @param {Array} fields 
     */
    #createForm(fields){
        const form = document.createElement("form");
        form.addEventListener("submit", (e) =>{
            e.preventDefault();
            if(this.#validateAllFields()){
                const value = this.getValueObject();
                const author = new Author(value.nev, value.szamjegyekszama, value.szazad);
                this.manager.add(author);
                e.target.reset();
            }
            

        })
        for(const field of fields){
            const fieldobject = new FormField(field.id, field.label, field.type);
            this.#formFieldArray.push(fieldobject);
            form.appendChild(fieldobject.getFieldDiv());
        }
        const button = document.createElement("button");
        button.innerHTML = "Hozzáadás"
        form.appendChild(button);
        this.div.appendChild(form);
    }

    /**
     * 
     * @returns {boolean}
     */
    #validateAllFields(){
        let isvalid = true;
        for(const field of this.#formFieldArray){
            field.errorMessage = "";
            if(field.value === ""){
                field.errorMessage = "A mező kitöltése kötelező!";
                isvalid = false;
            }
        }
        return isvalid;
    }

    
}

class FormField{
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {HTMLInputElement}
     */
    #inputElement;

    /**
     * @type {HTMLLabelElement}
     */
    #labelElement;

    /**
     * @type {HTMLSpanElement}
     */
    #errorElement;

    /**
     * @returns {string}
     */
    get id(){
        return this.#id;
    }

    /**
     * 
     * @param {string} id 
     * @param {string} labelContent 
     * @param {string} type 
     */
    constructor(id, labelContent, type){
        this.#id = id;
        this.#labelElement = this.#makeLabel(id, labelContent);
        this.#inputElement = this.#makeInput(id, type);
        this.#errorElement = this.#makeError();
    }

    /**
     * 
     * @returns {HTMLDivElement}
     */
    getFieldDiv(){
        return this.#makeDiv([this.#labelElement, this.#inputElement, this.#errorElement]);
    }

    /**
     * 
     * @param {Array} htmlElementList 
     * @returns {HTMLDivElement}
     */
    #makeDiv(htmlElementList){
        const div = document.createElement("div");
        for(const element of htmlElementList){
            div.appendChild(element);
            div.appendChild(document.createElement("br"));
        }
        return div
    }

    /**
     * 
     * @param {string} id 
     * @param {string} labelCon 
     * @returns {HTMLLabelElement}
     */
    #makeLabel(id, labelCon){
        const label = document.createElement("label");
        label.htmlFor = id;
        label.textContent = labelCon;
        return label;
    }

    /**
     * 
     * @param {string} id 
     * @param {string} type 
     * @returns {HTMLInputElement}
     */
    #makeInput(id, type = "text"){
        const inputField = document.createElement("input");
        inputField.id = id;
        inputField.type = type;
        return inputField;
    }

    /**
     * 
     * @returns {HTMLSpanElement}
     */
    #makeError(){
        const errorField = document.createElement("span");
        errorField.className = "error";
        return errorField;
    }

    /**
     * @param {string}
     */
    set errorMessage(message) {
        this.#errorElement.textContent = message;
    }

    /**
     * @returns {string}
     */
    get value(){
        return this.#inputElement.value;
    }

}