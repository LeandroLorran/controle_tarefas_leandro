import { LeiaTexto, LeiaNumero } from "./entrada.js";

import {
  CadastrarTarefa,
  ListarTarefas,
  BuscarTarefa,
  AtualizarStatus,
  ListarPorStatus,
  tarefas,
} from "./tarefas.js";

import {
  RelatorioGeral,
  relatorioPrioridades,
  relatorioResponsaveis,
} from "./relatorios.js";

let opcao;

console.log("\n====================================");
console.log("  SISTEMA DE CONTROLE DE TAREFAS ");
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

do {
  opcao = LeiaNumero("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      CadastrarTarefa();
      break;

    case 2:
      ListarTarefas();
      break;

    case 3: {
      let id = LeiaNumero("Informe o ID da tarefa: ");
      let resultado = BuscarTarefa(id);

      if (resultado) {
        console.log("Tarefa encontrada:");
        console.log(resultado);
      } else {
        console.log("Tarefa não encontrada!");
      }
      break;
    }

    case 4: {
      let id = LeiaNumero("Informe o ID da tarefa: ");
      let novoStatus = LeiaTexto("Informe o novo status: ");

      AtualizarStatus(id, novoStatus);
      break;
    }

    case 5: {
      let status = LeiaTexto("Informe o status desejado: ");

      ListarPorStatus(status);
      break;
    }

    case 6:
      RelatorioGeral(tarefas);
      break;

    case 7:
      relatorioPrioridades(tarefas);
      break;

    case 8:
      relatorioResponsaveis(tarefas);
      break;
    case 9:
      console.log("\n====================================");
      console.log("  SISTEMA DE CONTROLE DE TAREFAS ");
      console.log("====================================");
      console.log("1 - Cadastrar tarefa");
      console.log("2 - Listar todas as tarefas");
      console.log("3 - Buscar tarefa por ID");
      console.log("4 - Atualizar status de tarefa");
      console.log("5 - Listar tarefas por status");
      console.log("6 - Relatório geral");
      console.log("7 - Relatório por prioridade");
      console.log("8 - Relatório de responsáveis");
      console.log("0 - Sair");
      console.log("====================================");
    case 0:
      console.log("Encerrando o sistema... Até mais!");
      break;

    default:
      console.log("Opção inválida! Tente novamente.");
      break;
  }
} while (opcao !== 0);
