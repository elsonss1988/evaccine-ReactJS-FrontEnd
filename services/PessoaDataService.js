import axios from 'axios';

const API_URL = 'http://localhost:8080/'

class PessoaDataService{
    retriveAllPessoas(){
        return axios.get(`${API_URL}pessoas`);
    }
    updatePessoas(pessoa,codigo){
        console.log(pessoa['nome']+"********"+codigo)
        return axios.put(`${API_URL}pessoas/${codigo}`,pessoa);
    }
}

export default new PessoaDataService();