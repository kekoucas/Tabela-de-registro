//aqui definimos o nome do array, selecionamos nossos 2 botões, a checkbox que vai executar uma função que vai habilitar ou desabilitar
//o campo(input) chamado complemento.
var tabela = []
var btn = document.getElementById("btn")
var btntbl = document.getElementById("btntbl")

let checkbox = document.getElementById("checkbox")
complemento = document.getElementById("complemento")

checkbox.oninput = function(){
    if(checkbox.checked == true){
        complemento.disabled = false
    }else if (checkbox.checked == false){
        complemento.disabled = true
    }
}

// criamos nossa função construtora
function Mulario(nome,dataDeNascimento,email,tell,estdcivil,escolaridade,cep,rua,numcasa,complemento,bairro,cidade,estado){
    this.nome = nome
    this.dataDeNascimento = dataDeNascimento
    this.email = email
    this.tell =tell
    this.estdcivil = estdcivil
    this.escolaridade = escolaridade
    this.cep = cep
    this.rua = rua
    this.numcasa = numcasa
    this.complemento = complemento
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
}

// ao click do botão pegamos todos os valores dos inputs, usamos nossa finção construtora para criar um novo objeto e em seguida damos um push
// nele pra dentro da variavel pessoa, e em seguida resetamos os inputs.
btn.onclick = function() {
    let nome = document.getElementById("nome").value
    let dataDeNascimento = document.getElementById("DataDeNascimento").value
    let email = document.getElementById("email").value
    let tell = document.getElementById("tell").value
    let estdcivil = document.getElementById("estdcivil").value
    let escolaridade = document.getElementById("escolaridade").value
    let cep = document.getElementById("cep").value
    let rua = document.getElementById("rua").value
    let numcasa = document.getElementById("numcasa").value
    let complemento = document.getElementById("complemento").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let pessoa = new Mulario(nome,dataDeNascimento,email,tell,estdcivil,escolaridade,cep,rua,numcasa,complemento,bairro,cidade,estado)
    tabela.push(pessoa)
    let inputs = document.querySelectorAll("input")
    inputs.forEach(input => {input.value = ""})
}

// agora nos atribuimos a DOM o cabeçalho da tabela pré setado usando innerhtml, quando o botão receber um click ele executara a função exibir 
// no qual vai atualizar a nossa tabela adicionando novos elementos
btntbl.onclick = exibir
function exibir(){
    table = document.getElementById("tabela")
    
    table.innerHTML = `
    <tr>
    <th>Nome</th>
        <th>Data de nascimento</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Estado Civíl</th>
        <th>Escolaridade</th>
        <th>CEP</th>
        <th>Rua</th>
        <th>Numero da casa</th>
        <th>Complemento</th>
        <th>Bairro</th>
        <th>Cidade</th>
        <th>Estado</th>
        <th>Data de cadastro</th>
    </tr>`
// dentro desse foreach, criamos uma função costrutora para adicionar a data ao final do elemento exibido na tabela, depois criamos td's para
// nossa tabela, depois criamos o botao e usamos addeventlistener com os parametros click e sua função que é excluir o elemento no qual o botão
// foi atribuido, em seguida inserimos nosso conteudo na tabela com o append tr, no qual colocamos todos os atributos. e em baixo
// semapradamente está nossa função excluir, que nada mais é o uso do splice na tabela para retirarmos o elemento desejado.
    tabela.forEach(element => {
        const date = new Date()
        data = (date.getDate()) + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear())

        let tr = document.createElement("tr")
        let tdNome = document.createElement("td")
        let tdDataDeNascimento = document.createElement("td")
        let tdEmail = document.createElement("td")
        let tdTell = document.createElement("td")
        let tdEstdcivil = document.createElement("td")
        let tdEscolaridade = document.createElement("td")
        let tdCep = document.createElement("td")
        let tdRua = document.createElement("td")
        let tdNumcasa = document.createElement("td")
        let tdComplemento = document.createElement("td")
        let tdBairro = document.createElement("td")
        let tdCidade = document.createElement("td")
        let tdEstado = document.createElement("td")
        let tdData = document.createElement("td")
        let tdBtn = document.createElement("td")
        let botao = document.createElement("button")

        botao.className = "btn"

        botao.addEventListener("click", function() {excluir(element)})
        
        tdBtn.append(botao)

        tdNome.textContent = element.nome
        tdDataDeNascimento.textContent = element.dataDeNascimento
        tdEmail.textContent = element.email
        tdTell.textContent = element.tell
        tdEstdcivil.textContent = element.estdcivil
        tdEscolaridade.textContent = element.escolaridade
        tdCep.textContent = element.cep
        tdRua.textContent = element.rua
        tdNumcasa.textContent = element.numcasa
        tdComplemento.textContent = element.complemento
        tdBairro.textContent = element.bairro
        tdCidade.textContent = element.cidade
        tdEstado.textContent = element.estado 
        botao.textContent = "Excluir Usuario"
        
        tr.append(tdNome,tdDataDeNascimento,tdEmail,tdTell,tdEstdcivil,tdEscolaridade,tdCep,tdRua,tdNumcasa,tdComplemento,tdBairro,tdCidade,tdEstado,data,tdBtn)

        table.append(tr)
    })
    var pessoas = document.getElementById("pessoas").textContent = `Pessoas Cadastradas: ${tabela.length}`

}

function excluir(element) {
    tabela.splice(tabela.indexOf(element),1)
    exibir()
}



