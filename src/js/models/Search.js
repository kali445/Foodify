import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = 'ec149b448a46bee9adf87a74d935db1f';
        const proxy = 'https://cors-anywhere.herokuapp.com/';

        try {

            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;

        } catch (error) {
            console.log(error);
        }
    }
}


