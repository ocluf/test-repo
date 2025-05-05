/**
 * User model
 */

class User {
  constructor(id, name, email, birthdate) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birthdate = birthdate;
  }

  getFullName() {
    return this.name;
  }

  getAge() {
    const today = new Date();
    const birthDate = new Date(this.birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      birthdate: this.birthdate,
      age: this.getAge()
    };
  }
}

module.exports = User;
