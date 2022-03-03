interface UserInterface { 
    username: string,
    email: string,
    password: string
    darOi: (nome: string) => void
}

class UsuarioClasse implements UserInterface { /* o implements faz com que pegue o conteúdo da interface */

    username: string ='';
    email: string = '';
    password: string = '';

    darOi(nome: string): void{
        console.log(`Oi, ${nome}`)

    }
}


/* const u3: User2 = {
    username: 'Gabriel',
    email: 'gabriel.marques@gmail.com',
    password: '15609095',

    darOi(nome: string): void {
        console.log(`Oi, ${nome}`)
    }

}

console.log(u3.username, u3.email, u3.password )
u3.darOi('Gabriel Marques') */