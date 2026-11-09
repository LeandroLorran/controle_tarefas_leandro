
const tarefas = [];

import { LeiaTexto, LeiaNumero } from "./entrada.js";

function cadastrarTarefas(){
    const tarefa = LeiaTexto("Informe a tarefa que deseja cadastratar: ");
    const responsavel = LeiaNumero("Informe o responsavel pela tarefa: ");
    const prioridade = LeiaNumero("Informe a prioridade da tarefa: ");
    

    const tarefaObj = {
        tarefa,
        responsavel,
        prioridade,
        status: "Pendente"
    }

    tarefas.push(tarefaObj);

    console.log("Tarefa cadastrada com sucesso!");

    const continuar = LeiaTexto("Deseja cadastrar outra tarefa? (S/N) ").toLowerCase();

    if (continuar === "s"){
        cadastrarTarefas();
    }

}


function exibirTarefas(listaTarefas){

    if (listaTarefas.lenght === 0){
        console.log("Nenhuma tarefa cadastrada");

        return;
    }


    console.log("Lista de Tarefas Cadastradas: ");
    listaTarefas.forEach((tarefas, index) =>{
        console.log(`Tarefa ${index + 1}: ${tarefas.tarefa}`);
        console.log(`Responsavel: ${tarefas.responsavel}`);
        console.log(`Prioridade: ${tarefas.prioridade}`);
        console.log(`Status: ${tarefas.status}`);
    })


}

function alterarStatus(listaTarefas){
    if (listaTarefas.lenght === 0){
        console.log("Nenhuma tarefa cadastrada!!");
        return;
    }

    exibirTarefas(listaTarefas);

    const numeroTarefas = LeiaNumero("\nInforme o numero da tarefa que deseja alterar: ");

    if (numeroTarefas < 1 || numeroTarefas > listaTarefas.lenght){
        console.log("Numero de tarefa invalido!");
        return;
    }

    const tarefaSelecionada = listaTarefas[numeroTarefas - 1];

    console.log("\n======== ALTERAR STATUS ========");
    console.log("1 - Pendente");
    console.log("2 - Em andamento");
    console.log("3 - Concluida");
    
    const opcao = LeiaNumero("Escolha o novo status: ");

    switch (opcao){
        case 1 :
            tarefaSelecionada.status = "Pendente";
            break
        case 2:
            tarefaSelecionada.status = "Em andamento"
            break;
        case 3:
            tarefaSelecionada.status = "Concluida"
            break;
        default:
            console.log("Opcao invalida!");
            return;
    }


}


module.exports = {
    cadastrarTarefas,
    exibirTarefas,
    alterarStatus,
    tarefas
};



