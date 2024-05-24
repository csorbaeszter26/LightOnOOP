export default class Lampa {
    #allapot = false;
    #id = 0;
    #divElem;
    #szuloElem;

    constructor(id, allapot, szuloElem){
        this.#id = id;
        this.#allapot = allapot
        this.#szuloElem = szuloElem
    }

    setAllapot(){
        let txt = `<div><p>${this.#allapot}</p></div>`;
        console.log(this.#szuloElem)
        this.#szuloElem.append(txt);

        this.#szinBeallit()
    }

    #szinBeallit(){
        if (allapot === false){
            
        }
    }

    #kattintasTrigger(esemenyNev){
        const kapcsolas = new CustomEvent(esemenyNev, {detail:this.#allapot})
        window.dispatchEvent(kapcsolas)
    }

}