// class User{
//     constructor(name, password){
//         this.name = name
//         this._password = password
//     }

//     set password(password){
//         this._password = password
//     }

//     get password(){
//         return this._password
//     }
// }

// let u1 = new User("Divyanshu", "123")
// console.log(u1.password); // password here is the password getter method


// Old style code
function User(name, password) {
    this.name = name;

    let _password = password; // private

    Object.defineProperty(this, 'password', {
        get: function () {
            return _password;
        },
        set: function (value) {
            _password = value;
        }
    });
}

let u1 = new User("Divyanshu", "123");

// ✅ This works — setter is called
u1.password = "23";

console.log(u1.password); // "23"
