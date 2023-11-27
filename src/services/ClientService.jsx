import axios from "axios"

const CLIENT_BASE_URL_API_REST = "http://localhost:8080/api/v1/users";

class ClientService{

    registerClientUser(client){
        return axios.post(`${CLIENT_BASE_URL_API_REST}/registerUser`,client)
    }
}

export default new ClientService();