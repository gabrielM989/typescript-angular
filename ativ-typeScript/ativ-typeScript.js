"use strict";
class UserAtiv {
    constructor(firtsName, lastName, userName, email, password, cpf, contact, isAdmin) {
        this.firtsName = '';
        this.lastName = '';
        this.userName = '';
        this.email = '';
        this.password = '';
        this.cpf = '';
        this.contact = '';
        this.isAdmin = '';
        this.firtsName = firtsName,
            this.lastName = lastName,
            this.userName = userName,
            this.email = email,
            this.password = password,
            this.cpf = cpf,
            this.contact = contact,
            this.isAdmin = isAdmin;
    }
    getfirtsName() {
        return this.firtsName;
    }
    setfirtsName(firstName) {
        this.firtsName = firstName;
    }
    getlastName() {
        return this.lastName;
    }
    setlastName(lastName) {
        this.lastName = lastName;
    }
    getuserName() {
        return this.userName;
    }
    setuserName(userName) {
        this.userName = userName;
    }
    getemail() {
        return this.email;
    }
    setemail(email) {
        this.email = email;
    }
    getpassword() {
        return this.password;
    }
    setpassword(password) {
        this.password = password;
    }
    getcpf() {
        return this.cpf;
    }
    setcpf(cpf) {
        this.cpf = cpf;
    }
    getcontact() {
        return this.contact;
    }
    setcontact(contact) {
        this.contact = contact;
    }
    getisAdmin() {
        return this.isAdmin;
    }
    setisAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }
}
let user1 = new UserAtiv('Gabriel', 'Marques', 'Gabriel98', 'gabriel@gmail.com', '123456', '469.856.555-88', '11 958853558', 'GabrielM');
let user3 = new UserAtiv('Gabriel', 'Marques', 'Gabriel98', 'gabriel@gmail.com', '123456', '469.856.555-88', '11 958853558', 'GabrielM');
console.log(user1, user3);
console.log(user1.getfirtsName());
user1.setfirtsName('Lucas Silva');
console.log(user1.getfirtsName());
console.log(user1.getemail());
user1.setemail('lucas@gmail.com');
console.log(user1.getemail());
console.log(user3.getlastName());
user3.setlastName('Almeida');
console.log(user3.getlastName());
