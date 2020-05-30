let user = {
  name: '',
  email: '',
  password: ''
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
