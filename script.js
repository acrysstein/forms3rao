// ===================================
// MEMÓRIAS ESCOLARES
// ===================================

const memorias = [

{
numero: "01",
titulo: "Minha infância",
periodo: "As visitas à casa da minha avó",

texto: `Desde pequena, eu sempre ia para Santa Catarina,
para a casa da minha avó.

Essas visitas fazem parte das minhas primeiras lembranças.
Eu gostava de pescar, observar os porcos e as galinhas
e aproveitar os momentos em família.

Eram experiências simples, mas muito especiais,
que guardo com carinho até hoje.`,

foto: "./assets/img/infancia1.jpg"
},

{
numero: "02",
titulo: "Ensino Fundamental",
periodo: "Anos iniciais e anos finais",

texto: `O Ensino Fundamental foi uma etapa importante
da minha formação.

Aqui ficam registradas minhas lembranças dessa fase,
como amizades, professores, atividades escolares,
descobertas e momentos especiais.

Este espaço poderá ser complementado com
outras recordações.`,

foto: "./assets/img/fundamental.jpg"
},

{
numero: "03",
titulo: "Altas Habilidades",
periodo: "Colégio Estadual Padre Cláudio Morelli",

texto: `Uma das experiências marcantes que vivi
no Colégio Estadual Padre Cláudio Morelli
foi participar das atividades de Altas Habilidades.

Esse período fez parte da minha trajetória escolar
e proporcionou experiências importantes
para meu desenvolvimento e aprendizado.`,

foto: "./assets/img/altas-habilidades.jpg"
},

{
numero: "04",
titulo: "Clube de Ciências",
periodo: "Projeto Sensor de Chuva",

texto: `Outro momento muito especial da minha trajetória
foi minha participação no Clube de Ciências.

Durante essa experiência, desenvolvemos
um projeto chamado Sensor de Chuva.

Também tive a oportunidade de participar
da apresentação do projeto, compartilhando
nosso trabalho e nossos conhecimentos.

Foi uma experiência que marcou minha vida escolar.`,

foto: "./assets/img/sensor-de-chuva.jpg"
},

{
numero: "05",
titulo: "Terceiro ano",
periodo: "Conclusão do Ensino Médio",

texto: `Chegar ao terceiro ano representa o encerramento
de uma etapa muito importante da minha vida.

Depois de tantos anos de experiências,
aprendizados, desafios e amizades,
começo a olhar para o futuro e para
todas as possibilidades que ainda existem.

Levo comigo as lembranças construídas
durante minha trajetória escolar.`,

foto: "./assets/img/terceiro-ano.jpg"
}

];


// ===================================
// PORTFÓLIO DAS 17 REDAÇÕES
// ===================================

// Preencha os temas e textos quando quiser.

const redacoes = [

{ numero: 1, tema: "Insira o tema da redação 1", texto: "" },
{ numero: 2, tema: "Insira o tema da redação 2", texto: "" },
{ numero: 3, tema: "Insira o tema da redação 3", texto: "" },
{ numero: 4, tema: "Insira o tema da redação 4", texto: "" },
{ numero: 5, tema: "Insira o tema da redação 5", texto: "" },
{ numero: 6, tema: "Insira o tema da redação 6", texto: "" },
{ numero: 7, tema: "Insira o tema da redação 7", texto: "" },
{ numero: 8, tema: "Insira o tema da redação 8", texto: "" },
{ numero: 9, tema: "Insira o tema da redação 9", texto: "" },
{ numero: 10, tema: "Insira o tema da redação 10", texto: "" },
{ numero: 11, tema: "Insira o tema da redação 11", texto: "" },
{ numero: 12, tema: "Insira o tema da redação 12", texto: "" },
{ numero: 13, tema: "Insira o tema da redação 13", texto: "" },
{ numero: 14, tema: "Insira o tema da redação 14", texto: "" },
{ numero: 15, tema: "Insira o tema da redação 15", texto: "" },
{ numero: 16, tema: "Insira o tema da redação 16", texto: "" },
{ numero: 17, tema: "Insira o tema da redação 17", texto: "" }

];


// ===================================
// MOSTRAR MEMÓRIAS
// ===================================

const linhaTempo = document.getElementById("linhaTempo");

memorias.forEach((memoria) => {

const card = document.createElement("button");

card.className = "card-memoria";

card.innerHTML = `
<span class="numero">${memoria.numero}</span>

<div>
<h3>${memoria.titulo}</h3>
<p>${memoria.periodo}</p>
</div>
`;

card.addEventListener("click", () => {

abrirJanela(
"MEMÓRIAS ESCOLARES",
memoria.titulo,
memoria.texto,
memoria.foto
);

});

linhaTempo.appendChild(card);

});


// ===================================
// MOSTRAR REDAÇÕES
// ===================================

const gradeRedacoes = document.getElementById("gradeRedacoes");

function mostrarRedacoes(filtro = "") {

gradeRedacoes.innerHTML = "";

const resultado = redacoes.filter((redacao) => {

return (
redacao.tema.toLowerCase().includes(filtro.toLowerCase()) ||
String(redacao.numero).includes(filtro)
);

});

resultado.forEach((redacao) => {

const card = document.createElement("button");

card.className = "card-redacao";

card.innerHTML = `
<span>REDAÇÃO ${String(redacao.numero).padStart(2, "0")}</span>

<h3>${redacao.tema}</h3>

<p>Clique para visualizar a produção.</p>
`;

card.addEventListener("click", () => {

abrirJanela(
"PORTFÓLIO DE REDAÇÕES",
`Redação ${redacao.numero}`,
redacao.texto || "ESPAÇO RESERVADO: insira aqui o texto completo desta redação.",
null
);

});

gradeRedacoes.appendChild(card);

});

document.getElementById("contador").textContent =
`${resultado.length} de 17 redações`;

}

mostrarRedacoes();


// ===================================
// PESQUISA DE REDAÇÕES
// ===================================

document.getElementById("pesquisar").addEventListener("input", (evento) => {

mostrarRedacoes(evento.target.value);

});


// ===================================
// JANELA INTERATIVA
// ===================================

const janela = document.getElementById("janela");

function abrirJanela(categoria, titulo, texto, foto) {

document.getElementById("categoria").textContent = categoria;

document.getElementById("tituloJanela").textContent = titulo;

document.getElementById("textoJanela").textContent = texto;

const areaFoto = document.getElementById("areaFoto");

areaFoto.innerHTML = "";

if (foto) {

const imagem = document.createElement("img");

imagem.src = foto;

imagem.alt = `Fotografia: ${titulo}`;

imagem.onerror = () => {

areaFoto.textContent =
"ESPAÇO PARA FOTOGRAFIA: adicione sua imagem na pasta assets/img.";

};

areaFoto.appendChild(imagem);

} else {

areaFoto.textContent =
"ESPAÇO RESERVADO PARA A REDAÇÃO.";

}

janela.showModal();

}


// ===================================
// FECHAR JANELA
// ===================================

document.getElementById("fechar").addEventListener("click", () => {

janela.close();

});

janela.addEventListener("click", (evento) => {

if (evento.target === janela) {

janela.close();

}

});


// ===================================
// TEMA CLARO E ESCURO
// ===================================

document.getElementById("tema").addEventListener("click", () => {

document.body.classList.toggle("escuro");

});


// ===================================
// MENU PARA CELULAR
// ===================================

document.getElementById("menuBtn").addEventListener("click", () => {

document.getElementById("menu").classList.toggle("aberto");

});

document.querySelectorAll("#menu a").forEach((link) => {

link.addEventListener("click", () => {

document.getElementById("menu").classList.remove("aberto");

});

});
