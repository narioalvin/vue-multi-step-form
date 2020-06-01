import axios from 'axios';

const url = 'https://radiant-fjord-77216.herokuapp.com/api/user/';
// const url = 'http://localhost:5000/api/user/'

class UserService {
  static register(user) {
    return axios.post(`${url}register`, {
      ...user
    });
  }

  static verify(user) {
    return axios.post(`${url}verify`, {
      ...user
    });
  }

  static createUser(user) {
    return axios.post(`${url}create`, {
      ...user
    });
  }

  static login(user) {
    return axios.post(`${url}login`, {
      ...user
    });
  }
}

export default UserService;
