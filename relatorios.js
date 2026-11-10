
export function RelatorioGeral(array) {
  let totalTarefas = array.length;
  let tarefasPendente = 0;
  let tarefasAndamento = 0;
  let tarefasConcluido = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].status === "Pendente") {
      tarefasPendente++;
    } else if (array[i].status === "Andamento") {
      tarefasAndamento++;
    } else if (array[i].status === "Concluido") {
      tarefasConcluido++;
    }
  }

  console.log("============== RELATÓRIO GERAL ==============");
  console.log("Quantidade de tarefas:", totalTarefas);
  console.log("Quantidade de tarefas pendentes:", tarefasPendente);
  console.log("Quantidade de tarefas em andamento:", tarefasAndamento);
  console.log("Quantidade de tarefas concluídas:", tarefasConcluido);
}

export function RelatorioPrioridades(array) {
  let PB = 0;
  let PM = 0;
  let PA = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].prioridade === "Baixa") {
      PB++;
    } else if (array[i].prioridade === "Média") {
      PM++;
    } else if (array[i].prioridade === "Alta") {
      PA++;
    }
  }

  console.log("========= RELATÓRIO PRIORIDADES =========");
  console.log("Tarefas com baixa prioridade:", PB);
  console.log("Tarefas com média prioridade:", PM);
  console.log("Tarefas com alta prioridade:", PA);
}

export function RelatorioResponsaveis(array) {
  console.log("========= RELATÓRIO RESPONSÁVEIS =========");

  for (let i = 0; i < array.length; i++) {
    console.log("Título:", array[i].titulo);
    console.log("Responsável:", array[i].responsavel);
    console.log("------------------------------------------");
  }
}
