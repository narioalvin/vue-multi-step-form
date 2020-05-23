import axios from 'axios';

const url = 'http://localhost:5000/api/users/';

class UserService {
  static sendMail(verification) {
    return axios.post(`${url}send`, {
      verification,
    });
  }

  static createUser(user) {
    return axios.post(url, {
      user,
    });
  }
}

export default UserService;
