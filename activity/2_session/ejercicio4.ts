class Login2 {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === 'admin' && this.password === 'passwd') {
      alert('User logged in.');
      return true;
    } else {
        alert('User or password incorrect.');
      return false;
    }
  }
}

// let login = new Login('admin', 'passwd') // alert -> User logged in
// login.login();
// let logbad = new Login('pepe', 'bad') // alert -> User or passwd incorrect
// logbad.login();