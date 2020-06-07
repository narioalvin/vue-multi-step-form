let user = {
  name: '',
  email: '',
  password: '',
};

let currentUser = {};

class UserStore {
  static setUser(value) {
    user = value;
  }
  static getUser() {
    return user;
  }

  static setCurrentUser(value) {
    currentUser = value;
  }
  static getCurrentUser() {
    return currentUser;
  }
}

export default UserStore;
