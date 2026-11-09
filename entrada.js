import readline from "readline-sync";

export function LeiaTexto(mensagem) {
    return readline.question(mensagem);
}

export function LeiaNumero(numero) {
    return readline.questionInt(numero);
}