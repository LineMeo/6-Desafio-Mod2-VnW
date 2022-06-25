// Crie um objeto que receba ao menos três propriedades sobre você.
const info = {
    nome: 'Aline',
    idade: 30,
    endereço: 'Rio de Janeiro',
}
console.log(info)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
info.comidaFavorita = 'Pizza'
console.log(info)

// Remova uma propriedade desse objeto.
delete info.idade
console.log(info)

//Mostre no console todas as propriedades desse objeto.
console.log(info)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

const cadastro = [{
        nome: 'Márcia',
        idade: 45,
        telefone: 21987456301,
        amigos: ['Marcos', 'Fernanda', 'Paulo', 'Ana']
    },
    {
        nome: 'Pedro',
        idade: 32,
        telefone: 32896478230,
        amigos: ['Matheus', 'Sonia', 'Lucas', 'Maria']
    },
    {
        nome: 'Laura',
        idade: 26,
        telefone: 24963017530,
        amigos: ['Theo', 'Anita', 'Milena', 'Andre']
    },
    {
        nome: 'Heitor',
        idade: 42,
        telefone: 84965074301,
        amigos: ['Jonas', 'Claudio', 'Ivone', 'Monica']
    },
    {
        nome: 'Tereza',
        idade: 28,
        telefone: 66964850372,
        amigos: ['Nadia', 'Gustavo', 'Hugo', 'Vera']
    }
]

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[3])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[2])