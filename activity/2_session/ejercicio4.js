var Login = /** @class */ (function () {
    function Login(username, password) {
        this.username = username;
        this.password;
    }
    Login.prototype.login = function (username, password) {
        if (this.username === username && this.password === password) {
            return true;
        }
        else {
            return false;
        }
    };
    return Login;
}());

let login = new Login('admin', 'passwd') // alert -> User logged in
login.login();
let logbad = new Login('pepe', 'bad') // alert -> User or passwd incorrect
logbad.login();
