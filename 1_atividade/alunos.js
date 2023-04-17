
const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, 'db.json');

///////////////////////////////////////////////////

const alunos = [
    { nome: "Adriano Almeida", media: 7.0, matricula: 1234 },
    { nome: "Bruna Oliveira", media: 9.0, matricula: 2345 },
    { nome: "Alice Damasceno", media: 7.8, matricula: 3456 },
    { nome: "Bruno Costa", media: 8.5, matricula: 4567 },
    { nome: "Cíntia Rabelo", media: 6.9, matricula: 5678 },
    { nome: "Diego Lopes", media: 8.2, matricula: 6789 },
    { nome: "Adriano Souza", media: 7.0, matricula: 7890 },
    { nome: "Érica Machado", media: 9.0, matricula: 8901 },
    { nome: "Felipe Nogueira", media: 7.3, matricula: 9012 },
    { nome: "Giovana Silva", media: 8.1, matricula: 123 },
    { nome: "Hugo Rocha", media: 6.5, matricula: 234 },
    { nome: "Isadora Ribeiro", media: 9.5, matricula: 345 },
    { nome: "Júlio Motta", media: 7.7, matricula: 456 },
    { nome: "Heloísa Cardoso", media: 8.5, matricula: 567 },
    { nome: "Isabel Campos", media: 7.0, matricula: 678 },
    { nome: "Hugo Silva", media: 9.0, matricula: 789 },
    { nome: "Ana Clara", media: 6.5, matricula: 890 },
    { nome: "Matheus Barros", media: 7.5, matricula: 901 },
    { nome: "Ana Beatriz", media: 8.0, matricula: 1234 },
    { nome: "Caio Ribeiro", media: 9.0, matricula: 2345 },
    { nome: "Daniel Barbosa", media: 6.5, matricula: 3456 },
    { nome: "Fernando Meirelles", media: 8.5, matricula: 4567 }
    
];

function filtroNome(nome, Alunos) {
    const filtroAlunos = Alunos.filter(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()));
    return filtroAlunos;
};

function filtroMedia(mediaNota, Alunos) {
    const filtroAlunos = Alunos.filter(aluno => aluno.media >= mediaNota);
    return filtroAlunos;
};


module.exports = {
    alunos,
    filtroNome,
    filtroMedia,
};