import "./scss/common.scss";

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({ name: "mango", email: "mango@mail" });
console.log(mango);
