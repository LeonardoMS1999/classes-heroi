class heroi{
    constructor(nome,tipo, idade){
    this.nome = nome
    this.tipo = tipo
    this.idade = idade
    }

    atacar(){

        var ataque;

        if (this.tipo ===  "mago"){
            ataque = "magia"
        }else if (this.tipo === "guerreiro"){ 
            ataque = "espada"
        }else if (this.tipo === "monge"){
            ataque = "artes marciais"
        }else{
            ataque = "shuriken" 
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)
        }
    
    
}

var varNome = prompt("Digite o nome do Herói: ")
var varTipo = prompt("Digite o tipo do Herói: (EX:mago,guerreiro,monge e ninja )")
var varIdade = prompt("Digite a idade do Herói: ")
varIdade = parseInt(varIdade)

let heroiInserido = new heroi(varNome, varTipo)

heroiInserido.atacar()
