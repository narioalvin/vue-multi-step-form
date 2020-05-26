let user = {
  name: '',
  email: '',
  password: '',
  code: ''
};

class UserStore {
  static setUser(value) {
    user = value;
  }
  static getUser() {
    return user;
  }
}

export default UserStore;
