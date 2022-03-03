
let str: string = 'Olá mundo' /* Essa é a maneira de fazer uma tipagem na variável */
console.log(str)

str = "Olá Gabriel Marques"
console.log(str)

str = 5 /* Ele não deixa usar um tipo Number, numa variável que foi declarada como string, mas não impede de realizar a mudança no Javascript */

let num: number = 100.8080

console.log(num)

num = 'Gabriel' /* Dá o erro, por ser um tipo diferente, mas não impede de alterar no JS */

console.log(num)

let bool: boolean = true

console.log('Eu sou legal ?', bool)

/* CONTEÚDO SOBRE ARRAYS */
console.log('------CONTEÚDO SOBRE ARRAYS---------')

let arr1: Array<string> = ['Gabriel', 'Bruna', 'Lucas', 'Fernando'] /* precisa informar o que o Array irá guardar */

arr1.forEach((x)=>{
    console.log(x)
})

let arr2: string[] = ['Danilo', 'Pereira', 'João'] /* Outro jeito de declarar um Array */

let arr3: boolean[] = [true, false, 15>10, 10>20]

/* CONTEÚDO SOBRE VARIÁVEIS OBJETOS */
console.log('------ CONTEÚDO SOBRE VARIÁVEIS OBJETOS ---- ')


let user: { /* Estamos tipando a variável, dizendo que ela será um obeto, com essas 4 variáveis */
    
    username: string,
    isAdmin: boolean,
    email: string,
    password: string

} = { /* atribuição das variáveis */

    isAdmin: true,
    username: 'gabriel_Marques',
    email:'gabriel@gmail.com',
    password:'505090'

}

type User = { /* Faz com que simplifiquemos o código */

    username: string,
    isAdmin: boolean,
    email: string,
    password: string

}


let user2: User = { 

    isAdmin: true,
    username: 'gabriel_Marques',
    email:'gabriel@gmail.com',
    password:'505090'

}

/* Outro conteúdo */
console.log('--------------Outro conteúdo-------------')


let s: string | Number = 'Olá mundo' /* dá para atribuir mais de um tipo , através do |*/
console.log(s)

s = 'Olá universo'
console.log(s)

let s2: any = 'Olá, mundo' /* com o "any", essa variável aceita qualquer tipo de variável */

let arr4: any = [] /* Não é muito recomendável */
let arr5: Array<string | number> = [] /* É uma prática melhor */

/* funções */
console.log('-------Funções----------')

function sum(n: number, n2:number): number{ /* nas funções, também precisamos tipar os parâmetros da função */

    return n + n2
}

console.log(sum(26, 10))

function f(n1: string, arr: string[]): Array<string> | string{

    arr.push(n1)

    return n1
}

function cumprimentar(nome: string): void { /* Para funções que não precisam ter retorno, basta inserir o VOID */
    console.log( nome)
}

cumprimentar('Gabriel Marques')

let f2 =  function(a: string, b: number): void{ /* exemplo de função anônima */

}

const x = ():void => { /* arrow function */

}

/* continuação funções */

const w: /* Primeiro estamos apenas tipando a constante w, depois executamos a função */
 (a: number, b: number) => boolean = function(a: number, b: number): boolean{
     return a > b
 }

 console.log(w(10, 7))

 /* Classes + getters e setters */
 console.log('------Classes + getters e setters-----')

 class Usuario{
    // propriedades outr atributos
    // construtores
    // métodos

  /*   public nome: string
    public email: string
    private senha: string

    constructor(nome: string, email: string, senha: string){
    this.email = email
    this.nome = nome
    this.senha = senha

    }
 */

    constructor( /* É um jeito mais fácil de fazer o construtor, sem necessidade de definir as propriedades */
        private nome: string,
        public email: string,
        private senha: string
    ) {}

    /* getters --> retornam valor a propriedades & setters -> atribuem valores a propriedade */

        getSenha(): string{
            return this.senha
        }

        setSenha(senha: string): void{
            this.senha = senha /* está recebendo a nova senha */
        }

        getNome(): string{
            return this.nome;
        }
        setNome(nome: string): void{
    
            this.nome = nome;
        } 
        getEmail(): string{
            return this.email
        }

        setEmail(email: string): void{
            this.email = email
        } 

    public cumprimentar():void {
        console.log(`Olá, o meu nome é: ${this.nome}`)
    }
 }

 let u: Usuario = new Usuario('Gabriel@gmail.com', 'Gabril o brabo', '12345')
 let u2: Usuario = new Usuario('hashash@asasd', 'Lucas mito', '54321')
 console.log(u, u2)

 u.cumprimentar() /* usando a função */

 console.log(u.getSenha())
 u.setSenha('gabrielbrabo') /* alteração da senha */

 console.log(u.getSenha())

 