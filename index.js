
//1-testar se o numero é primo

function numeroprimo(primo) {
    if (primo < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(primo); i++) {
        if (primo % i === 0) {
            return false;
        }
    }

    return true;
}


//teste numero primo
const primo = 17;
if (numeroprimo(primo)) {
    console.log(`${primo} é primo.`);
} else {
    console.log(`${primo} não é primo.`);
}

//listar os numeros primos
function numerosprimos() {
    const primos = [];

    for (let number = 2; number <= 1000; number++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (numerosprimos) {
            primos.push(number);
        }
    }

    return primos;
}
//teste dos numeros primos 1 a 1000
console.log(numerosprimos());

//2-validacao de senha
function validarSenha(senha) {
    if (senha.length < 8) {
        return "A senha deve ter pelo menos 8 caracteres.";
    }

    if (!/[A-Z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra maiúscula.";
    }

    if (!/[a-z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra minúscula.";
    }

    if (!/[0-9]/.test(senha)) {
        return "A senha deve conter pelo menos um número.";
    }

    return "A senha é válida.";
}

// exemplo de como usar
const senha1 = "Uvv12345";
const senha2 = "UNIVERSIDADE";
const senha3 = "murilo10";
const senha4 = "Murilo1";
console.log(validarSenha(senha1));
console.log(validarSenha(senha2));
console.log(validarSenha(senha3));
console.log(validarSenha(senha4));

//3- funçao qualquer fatorial
function calcularfatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;

    for (let i = numero; i >= 2; i--) {
        fatorial *= i;
    }

    return fatorial;
}

// calcular os fatoriais de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(`Fatorial de ${i}: ${calcularfatorial(i)}`);
}


//4-verificar quadrado perfeito
function quadradoperfeito(numero) {
    if (numero < 0) {
        return false;
    }

    const raiz = Math.sqrt(numero);

    return raiz === Math.floor(raiz);
}
