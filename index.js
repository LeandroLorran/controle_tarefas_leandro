
import { LeiaTexto, LeiaNumero } from "./entrada.js";

import {
    cadastrarTarefa,
    listarTarefas,
    atualizarStatus,
    buscarTarefaPorId,
    listarPorStatus,
    tarefas
} from "./tarefas.js";

import {
    RelatorioGeral,
    RelatorioPrioridades,
    RelatorioResponsaveis
} from "./relatorios.js";


let opcao;

do {

    console.log("\n====================================");
    console.log("     SISTEMA DE CONTROLE DE TAREFAS");
    console.log("====================================");
    console.log("1 - Cadastrar tarefa");
    console.log("2 - Listar todas as tarefas");
    console.log("3 - Buscar tarefa por ID");
    console.log("4 - Atualizar status de tarefa");
    console.log("5 - Listar tarefas por status");
    console.log("6 - Relatório geral");
    console.log("7 - Relatório por prioridade");
    console.log("8 - Relatório de responsáveis");
    console.log("9 - Voltar ao menu");
    console.log("0 - Sair");
    console.log("====================================");

    opcao = LeiaNumero("Escolha uma opcao: ");

    switch (opcao) {

        case 1:
            cadastrarTarefa();
            break;

        case 2:
            listarTarefas();
            break;

        case 3: {
            const id = LeiaNumero("Informe o ID da tarefa: ");

            const resultado = buscarTarefaPorId(id);

            if (resultado) {
                console.log("\nTarefa encontrada:");
                console.log(resultado);
            } else {
                console.log("\nTarefa não encontrada!");
            }

            break;
        }

        case 4:
            atualizarStatus();
            break;

        case 5: {
            const status = LeiaTexto(
                "Informe o status (Pendente, Em andamento ou Concluída): "
            );

            listarPorStatus(status);
            break;
        }

        case 6:
            RelatorioGeral(tarefas);
            break;

        case 7:
            RelatorioPrioridades(tarefas);
            break;

        case 8:
            RelatorioResponsaveis(tarefas);
            break;

        case 9:
            console.log("\nRetornando ao menu principal...");
            break;

        case 0:
            console.log("\nEncerrando o sistema... Até mais!");
            break;

        default:
            console.log("\nOpção inválida! Tente novamente.");
            break;
    }

} while (opcao !== 0);
