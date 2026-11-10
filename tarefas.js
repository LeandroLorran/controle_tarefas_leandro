
import { LeiaTexto, LeiaNumero } from "./entrada.js";

export const tarefas = [];

export function cadastrarTarefa() {
    let continuar;

    do {
        const tarefa = LeiaTexto("Informe a tarefa: ");
        const responsavel = LeiaTexto("Informe o responsável: ");
        const prioridade = LeiaNumero("Informe a prioridade (1 a 3): ");

        const id = tarefas.length === 0
            ? 1
            : Math.max(...tarefas.map(t => t.id)) + 1;

        const tarefaObj = {
            id,
            tarefa,
            responsavel,
            prioridade,
            status: "Pendente"
        };

        tarefas.push(tarefaObj);

        console.log("\nTarefa cadastrada com sucesso!");

        continuar = LeiaTexto(
            "Deseja cadastrar outra tarefa? (S/N): "
        ).toLowerCase();

    } while (continuar === "s");
}


export function listarTarefas(listaTarefas = tarefas) {

    if (listaTarefas.length === 0) {
        console.log("\nNenhuma tarefa cadastrada!");
        return;
    }

    console.log("\n======== LISTA DE TAREFAS ========");

    listaTarefas.forEach((tarefa) => {
        console.log(`\nID: ${tarefa.id}`);
        console.log(`Tarefa: ${tarefa.tarefa}`);
        console.log(`Responsável: ${tarefa.responsavel}`);
        console.log(`Prioridade: ${tarefa.prioridade}`);
        console.log(`Status: ${tarefa.status}`);
        console.log("----------------------------------");
    });
}


export function buscarTarefaPorId(id) {

    const tarefaEncontrada = tarefas.find((tarefa) => {
        return tarefa.id === id;
    });

    return tarefaEncontrada || null;
}



export function atualizarStatus() {

    if (tarefas.length === 0) {
        console.log("\nNenhuma tarefa cadastrada!");
        return;
    }

    listarTarefas();

    const id = LeiaNumero("\nInforme o ID da tarefa que deseja alterar: ");

    const tarefaSelecionada = buscarTarefaPorId(id);

    if (!tarefaSelecionada) {
        console.log("\nTarefa não encontrada!");
        return;
    }

    console.log("\n======== ALTERAR STATUS ========");
    console.log("1 - Pendente");
    console.log("2 - Em andamento");
    console.log("3 - Concluída");

    const opcao = LeiaNumero("Escolha o novo status: ");

    switch (opcao) {
        case 1:
            tarefaSelecionada.status = "Pendente";
            break;

        case 2:
            tarefaSelecionada.status = "Em andamento";
            break;

        case 3:
            tarefaSelecionada.status = "Concluída";
            break;

        default:
            console.log("\nOpção inválida!");
            return;
    }

    console.log("\nStatus atualizado com sucesso!");
}



export function listarPorStatus(status) {

    const tarefasFiltradas = tarefas.filter((tarefa) => {
        return tarefa.status.toLowerCase() === status.toLowerCase();
    });

    if (tarefasFiltradas.length === 0) {
        console.log("\nNenhuma tarefa encontrada com esse status!");
        return;
    }

    listarTarefas(tarefasFiltradas);
}
