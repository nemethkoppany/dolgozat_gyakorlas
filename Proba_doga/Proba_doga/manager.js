class Manager{
    /**
     * @type {Array}
     */
    #array

    /** 
     * @type {CallBack}
     */
    #addCallBack;

    /**
     * A manager constructora
     */
    constructor(){
        this.#array = [];
    }

    /**
     * 
     * @param {Author} author 
     */
    add(author){
        this.#array.push(author);
        this.#addCallBack(author);
    }

    /**
     * 
     * @param {CallBack} callback 
     */
    setAddCallback(callback){
        this.#addCallBack = callback;
    }

    /**
     * 
     * @returns {Array}
     */
    generateExport(){
        const result = [];
        for(const author of this.#array){
            const line = `${author.nev};${author.szamjegyekszama};${author.szazad}`;
            result.push(line);
        }
        return result.join('\n');
    }

}