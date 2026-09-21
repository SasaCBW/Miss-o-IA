const content = document.getElementById("content");

let respostas = {
    pensamento: "",
    imagem: "",
    trabalho: "",
    escola: ""
};

function mostrarInicio() {
    content.innerHTML = `
        <div class="text-box">
            <div class="question">
                <p>
                    Assim que saiu da escola Sara se depara com uma nova tecnologia:
                    um chat que consegue responder todas as dúvidas que uma pessoa
                    pode ter, o chat também gera imagens e áudios hiper-realistas.
                    Qual o primeiro pensamento de Sara?
                </p>
            </div>

            <div class="options">
                <button class="option" onclick="responderPensamento('assustador', this)">
                    Isso é assustador!
                </button>

                <button class="option" onclick="responderPensamento('maravilhoso', this)">
                    Isso é maravilhoso!
                </button>
            </div>
        </div>
    `;
}

function responderPensamento(valor, botao) {
    respostas.pensamento = valor;

    document.querySelectorAll(".option").forEach(btn => {
        btn.classList.remove("selected");
    });

    botao.classList.add("selected");

    setTimeout(() => {
        mostrarHistoria();
    }, 400);
}

function mostrarHistoria() {
    content.innerHTML = `
        <div class="text-box">
            <p>
                Em 2049, Sara...
            </p>

            <br>

            <p>
                Achou assustador pensar que máquinas agora poderiam mudar o mundo.
                Percebeu que a IA consegue explicar termos complicados de forma
                simplificada e isso ajudou muito suas pesquisas sobre assuntos
                complexos. Notou que muitas pessoas não sabem utilizar as
                ferramentas tradicionais e decidiu compartilhar seus conhecimentos
                de design utilizando ferramentas de pintura digital para iniciantes.
            </p>

            <button class="continue" onclick="mostrarImagem()">
                Continuar
            </button>
        </div>
    `;
}

function mostrarImagem() {
    content.innerHTML = `
        <div class="text-box">
            <div class="question">
                <p>
                    Ao final da discussão, Sara precisou criar uma imagem no
                    computador que representasse o que pensa sobre IA. E agora?
                </p>
            </div>

            <div class="options">
                <button class="option" onclick="responderImagem('ia', this)">
                    Criar uma imagem utilizando um gerador de imagem de IA.
                </button>

                <button class="option" onclick="responderImagem('paint', this)">
                    Criar uma imagem utilizando uma plataforma de design como o Paint.
                </button>
            </div>
        </div>
    `;
}

function responderImagem(valor, botao) {
    respostas.imagem = valor;

    document.querySelectorAll(".option").forEach(btn => {
        btn.classList.remove("selected");
    });

    botao.classList.add("selected");

    setTimeout(() => {
        mostrarTrabalho();
    }, 400);
}

function mostrarTrabalho() {
    content.innerHTML = `
        <div class="text-box">
            <div class="question">
                <p>
                    Depois que Sara escreveu o trabalho, teve uma discussão sobre
                    o impacto da IA no trabalho do futuro. O que a Sara faz?
                </p>
            </div>

            <div class="options">
                <button class="option" onclick="responderTrabalho('oportunidades', this)">
                    Defende a ideia de que a IA pode criar novas oportunidades de
                    emprego e melhorar habilidades humanas.
                </button>

                <button class="option" onclick="responderTrabalho('trabalhadores', this)">
                    Me preocupo com as pessoas que perderão seus empregos para
                    máquinas e defendo a importância de proteger os trabalhadores.
                </button>
            </div>
        </div>
    `;
}

function responderTrabalho(valor, botao) {
    respostas.trabalho = valor;

    document.querySelectorAll(".option").forEach(btn => {
        btn.classList.remove("selected");
    });

    botao.classList.add("selected");

    setTimeout(() => {
        mostrarEscola();
    }, 400);
}

function mostrarEscola() {
    content.innerHTML = `
        <div class="text-box">
            <div class="question">
                <p>
                    Com a descoberta desta tecnologia uma professora de tecnologia
                    da escola decidiu fazer uma sequência de aulas sobre IA.
                    No fim de uma aula ela pede que Sara escreva um trabalho sobre
                    o uso de tecnologia em sala de aula. Qual atitude Sara toma?
                </p>
            </div>

            <div class="options">
                <button class="option" onclick="responderEscola('ia', this)">
                    Utiliza uma ferramenta de busca na Internet que utiliza IA para
                    que ela ajude a encontrar informações relevantes para o trabalho
                    e explique numa linguagem que facilite o entendimento.
                </button>

                <button class="option" onclick="responderEscola('proprios', this)">
                    Escreve o trabalho com base nas conversas que teve com colegas,
                    algumas pesquisas na internet e conhecimentos próprios sobre o tema.
                </button>
            </div>
        </div>
    `;
}

function responderEscola(valor, botao) {
    respostas.escola = valor;

    document.querySelectorAll(".option").forEach(btn => {
        btn.classList.remove("selected");
    });

    botao.classList.add("selected");

    setTimeout(() => {
        mostrarResultado();
    }, 400);
}

function mostrarResultado() {
    const escolhasIA =
        (respostas.imagem === "ia" ? 1 : 0) +
        (respostas.trabalho === "oportunidades" ? 1 : 0) +
        (respostas.escola === "ia" ? 1 : 0);

    let titulo;
    let texto;

    if (escolhasIA >= 2) {
        titulo = "Você decidiu o futuro da IA!";
        texto = `
            Suas escolhas mostram uma visão de futuro em que a inteligência
            artificial pode ser utilizada como ferramenta para aprender, criar
            e desenvolver novas possibilidades, sempre com participação humana.
        `;
    } else {
        titulo = "Você decidiu o futuro da IA!";
        texto = `
            Suas escolhas mostram uma visão mais cuidadosa sobre o avanço da
            inteligência artificial, valorizando o conhecimento humano e a
            importância de refletir sobre os impactos da tecnologia.
        `;
    }

    content.innerHTML = `
        <div class="final-box">
            <h2>${titulo}</h2>

            <p>${texto}</p>

            <button class="continue restart" onclick="reiniciar()">
                Jogar novamente
            </button>
        </div>
    `;
}

function reiniciar() {
    respostas = {
        pensamento: "",
        imagem: "",
        trabalho: "",
        escola: ""
    };

    mostrarInicio();
}

mostrarInicio();
