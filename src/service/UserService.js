import axios from 'axios';

// const url = 'https://radiant-fjord-77216.herokuapp.com/api/user/';
const url = 'http://localhost:5000/api/user/'

class UserService {
  static register(user) {
    return axios.post(`${url}register`, {
      ...user
    });
  }

  static verify(code) {
    return axios.post(`${url}verify`, {
      code
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

  static googleSignin() {
    return axios.get('http://localhost:5000/google');
  }
}

export default UserService;
