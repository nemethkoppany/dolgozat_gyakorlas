class Author{
    /**
     * @type {string}
     */
    #nev;
    /**
     * @type {Number}
     */
    #szamjegyekszama;
    /**
     * @type {Number}
     */
    #szazad
    
    /**
     * 
     * @param {string} nev 
     * @param {Number} szamjegyekszama 
     * @param {Number} szazad 
     */
    constructor(nev, szamjegyekszama, szazad){
        this.#nev = nev;
        this.#szamjegyekszama = szamjegyekszama;
        this.#szazad = szazad;
    }

    
    /**
     * @returns {string}
     */
    get nev(){
        return this.#nev;
    }

    /**
     * @param {string}
     * @returns {string}
     */
    set nev(value){
        this.#nev = value;
    }

    /**
     * @returns {Number}
     */
    get szamjegyekszama(){
        return this.#szamjegyekszama;
    }

    /**
     * @param {Number}
     * @returns {Number}
     */
    set szamjegyekszama(value){
        this.#szamjegyekszama = value
    }

    /**
     * @returns {Number}
     */
    get szazad(){
        return this.#szazad;
    }

    /**
     * @param {Number}
     * @returns {Number}
     */
    set szazad(value){
        this.#szazad = value;
    }
}