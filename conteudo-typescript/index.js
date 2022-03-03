"use strict";
let str = 'Olá mundo'; /* Essa é a maneira de fazer uma tipagem na variável */
console.log(str);
str = "Olá Gabriel Marques";
console.log(str);
str = 5; /* Ele não deixa usar um tipo Number, numa variável que foi declarada como string, mas não impede de realizar a mudança no Javascript */
let num = 100.8080;
console.log(num);
num = 'Gabriel'; /* Dá o erro, por ser um tipo diferente, mas não impede de alterar no JS */
console.log(num);
let bool = true;
console.log('Eu sou legal ?', bool);
/* CONTEÚDO SOBRE ARRAYS */
console.log('------CONTEÚDO SOBRE ARRAYS---------');
let arr1 = ['Gabriel', 'Bruna', 'Lucas', 'Fernando']; /* precisa informar o que o Array irá guardar */
arr1.forEach((x) => {
    console.log(x);
});
let arr2 = ['Danilo', 'Pereira', 'João']; /* Outro jeito de declarar um Array */
let arr3 = [true, false, 15 > 10, 10 > 20];
/* CONTEÚDO SOBRE VARIÁVEIS OBJETOS */
console.log('------ CONTEÚDO SOBRE VARIÁVEIS OBJETOS ---- ');
let user = {
    isAdmin: true,
    username: 'gabriel_Marques',
    email: 'gabriel@gmail.com',
    password: '505090'
};
let user2 = {
    isAdmin: true,
    username: 'gabriel_Marques',
    email: 'gabriel@gmail.com',
    password: '505090'
};
/* Outro conteúdo */
console.log('--------------Outro conteúdo-------------');
let s = 'Olá mundo'; /* dá para atribuir mais de um tipo , através do |*/
console.log(s);
s = 'Olá universo';
console.log(s);
let s2 = 'Olá, mundo'; /* com o "any", essa variável aceita qualquer tipo de variável */
let arr4 = []; /* Não é muito recomendável */
let arr5 = []; /* É uma prática melhor */
/* funções */
console.log('-------Funções----------');
function sum(n, n2) {
    return n + n2;
}
console.log(sum(26, 10));
function f(n1, arr) {
    arr.push(n1);
    return n1;
}
function cumprimentar(nome) {
    console.log(nome);
}
cumprimentar('Gabriel Marques');
let f2 = function (a, b) {
};
const x = () => {
};
/* continuação funções */
const w = /* Primeiro estamos apenas tipando a constante w, depois executamos a função */ function (a, b) {
    return a > b;
};
console.log(w(10, 7));
/* Classes + getters e setters */
console.log('------Classes + getters e setters-----');
class Usuario {
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
    constructor(/* É um jeito mais fácil de fazer o construtor, sem necessidade de definir as propriedades */ nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    /* getters --> retornam valor a propriedades & setters -> atribuem valores a propriedade */
    getSenha() {
        return this.senha;
    }
    setSenha(senha) {
        this.senha = senha; /* está recebendo a nova senha */
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    cumprimentar() {
        console.log(`Olá, o meu nome é: ${this.nome}`);
    }
}
let u = new Usuario('Gabriel@gmail.com', 'Gabril o brabo', '12345');
let u2 = new Usuario('hashash@asasd', 'Lucas mito', '54321');
console.log(u, u2);
u.cumprimentar(); /* usando a função */
console.log(u.getSenha());
u.setSenha('gabrielbrabo'); /* alteração da senha */
console.log(u.getSenha());
