class tabelaHash{
  constructor(){
    this.tamanho = 10;
    this.tabela = new Array(this.tamanho);
    
  }

  //Função de Dispersão

  hash(key) {
    var hash = 0;
    for(var i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
      
    }
    return hash % this.tamanho;
  }
  //Função de inserção - inserimos um par chave valor
  inserir(key, valor) {
    var index = this.hash(key);
    if (!this.tabela[index]) {
      this.tabela[index] = [];
    }
    this.tabela[index].push({ key, valor });
  }
  //Obter valores associoados a uma chave
  obter(key) {
    const index = this.hash(key);
    for(var i = 0; i < this.tabela[index].length; i++){
      if(this.tabela[index][i].key === key) {
        return this.tabela[index][i].valor;
      }
    }
    return undefined;
  }
//Função excluir
  excluir(key) {
    const index = this.hash(key);
    for (var i = 0; i < this.tabela[index].length; i++) {
      if (this.tabela[index][i].key === key) {
        this.tabela[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
// Inserção das traduções
const dicionario = new tabelaHash();
dicionario.inserir("tecnologia", ["technology","technologie","technologie"])
dicionario.inserir("amor", ["love", "aimer", "liebe"]);
dicionario.inserir("casa", ["house", "haus", "maison"]);
dicionario.inserir("sol", ["sun", "sonne", "soleil"]);
dicionario.inserir("gato", ["cat", "katze", "chat"]);
dicionario.inserir("água", ["water", "wasser", "eau"]);
dicionario.inserir("livro", ["book", "buch", "livre"]);
dicionario.inserir("maçã", ["apple", "apfel", "pomme"]);
dicionario.inserir("tempo", ["time", "zeit", "temps"]);
dicionario.inserir("feliz", ["happy", "glücklich", "heureux"]);
dicionario.inserir("amigo", ["friend", "freund", "ami"]);
dicionario.inserir("cidade", ["city", "stadt", "ville"]);
dicionario.inserir("solução", ["solution", "lösung", "solution"]);
dicionario.inserir("beleza", ["beauty", "schönheit", "beauté"]);

// Busca de traduções
var palavra = "amor";
console.log(dicionario.obter(palavra));
var palavra = "tecnologia";
console.log(dicionario.obter(palavra));
var palavra = "casa";
console.log(dicionario.obter(palavra));
var palavra = "sol";
console.log(dicionario.obter(palavra));
var palavra = "gato";
console.log(dicionario.obter(palavra));
var palavra = "água";
console.log(dicionario.obter(palavra));
var palavra = "livro";
console.log(dicionario.obter(palavra));
var palavra = "maçã";
console.log(dicionario.obter(palavra));
var palavra = "tempo";
console.log(dicionario.obter(palavra));
var palavra = "feliz";
console.log(dicionario.obter(palavra));


//A tradução também pode ser buscada por esse código:
console.log("\nOutra opção para busca da tradução da palavra");
var palavra1 = "tecnologia";
var traducoes = dicionario.obter(palavra1);
if (traducoes) {
  console.log(`Traduções da palavra '${palavra1}':`);
  console.log("Inglês:", traducoes[0]);
  console.log("Alemão:", traducoes[1]);
  console.log("Francês:", traducoes[2]);
} else {
  console.log(`Palavra '${palavra1}' não encontrada no dicionário.`);
}

