

export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    };

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }


    getAllCharacters = async () => {
        const res = await this.getResource("/characters?page=5&pageSize=10");
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: char.name || 'no data',
            gender: char.gender || 'no data',
            born: char.born || 'no data',
            died: char.died || 'no data',
            culture: char.culture || 'no data'
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: house.name || 'no data',
            region: house.region || 'no data',
            words: house.words || 'no data',
            titles: house.titles || 'no data',
            overload: house.overload || 'no data',
            ancestralWeapons: house.ancestralWeapons || 'no data'

        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: book.name,
            numberOfPages: book.numberOfPages,
            puplisher: book.publisher,
            released: book.released
        }
    }

}

