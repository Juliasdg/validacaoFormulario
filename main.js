
function validarCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function validarForm()
{
        var nome = document.getElementById('nome').value
        var endereco = document.getElementById('endereco').value
        var bairro = document.getElementById('bairro').value
        var cep = document.getElementById('cep').value.replace(/[^0-9]/, "")
        var cidade = document.getElementById('cidade').value
        var estado = document.getElementById('estado').value
        var telefone = document.getElementById('telefone').value
        var celular = document.getElementById('celular').value
        var rg = document.getElementById('rg').value.replace(/\.|\-/g, "")
        var cpf = document.getElementById('cpf').value.replace(/\.|\-/g, "")

        //Validação do campo 'nome'
        if(nome != ""){
            console.log("Tamanho do campo: " + nome.length)
        }else{
            console.log("É necessário preencher o campo 'nome'")
            }

        //Validação do campo 'endereço'
        if(endereco != ""){
            console.log("Tamanho do campo: " + endereco.length)
        }else{
            console.log("É necessário preencher o campo 'endereço'")
        }

        //Validação do campo 'bairro'
        if(bairro != ""){
            console.log("Tamanho do campo: " + bairro.length)
        }else{
            console.log("É necessário preencher o campo 'bairro'")
        }

        //Validação do campo 'cep'
        if(cep.length >= 10 || cep.length < 8){
            console.log("CEP Inválido!")
        }else{
            console.log("Tamamho do campo: " + cep.length)
        }

        //Validação do campo 'cidade'
        if(cidade != ""){
            console.log("Tamanho do campo: " + cidade.length)
        }else{
            console.log("É necessário preencher o campo ''cidade'")
        }

        //Validação do campo 'estado'
        if(estado != ""){
            console.log("Tamanho do campo: " + estado.length)
        }else{
            console.log("É necessário preencher o campo 'estado'")
        }

        //Validação do campo 'telefone'
        if(telefone.length >= 10 || telefone.length < 8){
            console.log("Telefone Inválido!")
        }else{
            console.log("Tamamho do campo: " + telefone.length)
        }

        //Validação do campo 'celular'
        if(celular.length >= 15 || celular.length < 11){
            console.log("Celular Inválido!")
        }else{
            console.log("Tamamho do campo: " + celular.length)
        }

        //Validação do campo 'rg'
        if(rg.length >= 13 || celular.length < 9){
            console.log("RG Inválido!")
        }else{
            console.log("Tamamho do campo: " + rg.length)
        }

        //Validação do campo 'cpf'
        if (validarCPF(cpf)) {
            console.log("CPF válido!");
        }else {
            console.log("CPF inválido!");
        }
}