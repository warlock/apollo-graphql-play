module.exports = class UserModel {
  constructor ({
    name,
    surname,
    company,
    mail
  }) {
    this.id = Date.now().toString()
    this.name = name
    this.surname = surname
    this.company = company
    this.mail = mail
  }
}