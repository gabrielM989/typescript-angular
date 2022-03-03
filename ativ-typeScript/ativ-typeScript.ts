interface UserProps { 
    firtsName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    cpf: string,
    contact: string,
    isAdmin: string,
    
}

class UserAtiv implements UserProps{

    firtsName: string = '';
    lastName: string = '';
    userName: string = '';
    email: string = '';
    password: string = '';
    cpf: string = '';
    contact: string = '';
    isAdmin: string = '';



    constructor(firtsName: string, lastName: string, userName: string, email: string, password: string, cpf: string, contact: string, isAdmin: string)
    {
        this.firtsName = firtsName,
        this.lastName = lastName,
        this.userName = userName,
        this.email = email,
        this.password = password,
        this.cpf = cpf, 
        this.contact = contact,
        this.isAdmin = isAdmin
    }

getfirtsName(): string{
    return this.firtsName
}

setfirtsName(firstName: string): void{
    this.firtsName = firstName
}

getlastName(): string{
    return this.lastName
}

setlastName(lastName: string): void{
    this.lastName = lastName
}

getuserName(): string{
    return this.userName
}

setuserName(userName: string): void{
    this.userName = userName
}

getemail(): string{
    return this.email
}

setemail(email: string): void{
    this.email = email
}

getpassword(): string{
    return this.password
}

setpassword(password: string): void{
    this.password = password
}

getcpf(): string{
    return this.cpf
}

setcpf(cpf: string): void{
    this.cpf = cpf
}

getcontact(): string{
    return this.contact
}

setcontact(contact: string): void{
    this.contact = contact
}

getisAdmin(): string{
    return this.isAdmin
}

setisAdmin(isAdmin: string): void{
    this.isAdmin = isAdmin
}

}

 let user1: UserAtiv = new UserAtiv('Gabriel', 'Marques', 'Gabriel98', 'gabriel@gmail.com', '123456', '469.856.555-88', '11 958853558', 'GabrielM')
 let user3: UserAtiv = new UserAtiv('Gabriel', 'Marques', 'Gabriel98', 'gabriel@gmail.com', '123456', '469.856.555-88', '11 958853558', 'GabrielM')
 console.log(user1, user3)

console.log(user1.getfirtsName())
user1.setfirtsName('Lucas Silva') 

console.log(user1.getfirtsName())

console.log(user1.getemail())
user1.setemail('lucas@gmail.com') 

console.log(user1.getemail())

console.log(user3.getlastName())
user3.setlastName('Almeida') 

console.log(user3.getlastName())

