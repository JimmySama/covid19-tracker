import axios from 'axios';
export default class Total{
    constructor(){

    }
    async  getTotal() {
        try{
            const result = await axios(`https://covid19.mathdro.id/api/`);
            this.result = result;
        }
        catch(error){
            alert(error);
            console.log(error);
        }

    }
}