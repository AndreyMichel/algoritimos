const operadorEscolhido = "";

if (operadorEscolhido === "+") {
  console.log(
    "O operador de mais e responsavel por somar inteiros ou concatenar strings"
  );

  // ARITIMEDICOS
  if (operadorEscolhido === "+") {
  console.log(
    "O operador de mais e responsavel por somar inteiros ou concatenar strings"
  );
} else if (operadorEscolhido === "-") {
  console.log("Subtrai valores inteiros");
} else if (operadorEscolhido === "*") {
  console.log("Multiplica os valores inteiros");
} else if (operadorEscolhido === "/") {
  console.log("Divide valores inteiros");
} else if (operadorEscolhido == "%") {
  console.log(
    "Operador de resto,faz a divisao mas exibe o resto em vez do resultado"
  );
}

// COMPARAÇAO
else if (operadorEscolhido === "==") {
  console.log("Operador de IGUALDADE,compara se o VALOR e igual");
} else if (operadorEscolhido === "===") {
  console.log("Operador de IDENTICO,compara se o TIPO e VALO e igual");
} else if (operadorEscolhido === "!==") {
  console.log("Operador de DIFERENTE DE,compara se e diferente do valor");
} else if (operadorEscolhido === "<=") {
  console.log(
    "Operador de MENOR ou IGUAL,compara se e menor ou igual o valor inserido"
  );
} else if (operadorEscolhido === ">=") {
  console.log(
    "Operador de MAIOR ou IGUAL,compara se e maior ou igual o valor inserido"
  );
}

// LOGICO
else if (operadorEscolhido === "&&") {
  console.log("Operador de 'E', todas as condiçoes devem ser verdadeiras");
} else if (operadorEscolhido === "||") {
  console.log(
    'Operador de "OU", pelo menor umas das condiçoes deve ser verdadeira'
  );
} else if (operadorEscolhido === "&&") {
  console.log('Operador de "NOT" ou oposiçao,valor contrario ou oposto');
}
