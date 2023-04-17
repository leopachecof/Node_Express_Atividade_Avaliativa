const express = require("express");
const app = express();
const { alunos } = require("./alunos.js");
app.use(express.json());
const fs = require('fs');

/////////////////////////          Atividade I        //////////////////////////

app.get("/alunos", (req, res) => {
    let listaAlunos = alunos;

    if (req.query.nome) {
        listaAlunos = listaAlunos.filter((aluno) =>
            aluno.nome.includes(req.query.nome)
        );
    }

    if (req.query.media) {
        listaAlunos = listaAlunos.filter((aluno) => aluno.media >= req.query.media);
    }

    res.json(listaAlunos);

        // Atualiza o aluno exercício V
        atualizarDbJson(alunos);
});

//       http://localhost:3000/alunos
//       http://localhost:3000/alunos?nome=Adriano
//       http://localhost:3000/alunos?nome=Ana
//       http://localhost:3000/alunos?media=7.5

/////////////////////////          Atividade II        //////////////////////////

app.post("/alunos/novo", (req, res) => {
    const { nome, matricula, media } = req.body;

    // Verifica se os campos são válidos
    if (!nome || !matricula || !media) {
        return res.status(400).json({ mensagem: "Campos inválidos" });
    }

    // Cria o novo aluno
    const novoAluno = {
        nome,
        matricula,
        media,
    };

    // Adiciona o novo aluno ao array de alunos
    alunos.push(novoAluno);

    // Atualiza o aluno exercício V
    atualizarDbJson(alunos);

    // Retorna o novo aluno adicionado
    res.json(novoAluno);
});
//            http://localhost:3000/alunos/novo

/////////////////////////          Atividade III        //////////////////////////

app.post('/alunos/deletar/:index', (req, res) => {
    const index = parseInt(req.params.index);

    // Verifica se o índice é válido
    if (isNaN(index) || index < 0 || index >= alunos.length) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    // Remove o aluno do array de alunos
    const alunoRemovido = alunos.splice(index, 1)[0];

    // Atualiza o aluno exercício V
    atualizarDbJson(alunos);

    // Retorna o aluno removido
    res.json(alunoRemovido);

});

/////////////////////////          Atividade IV        //////////////////////////

app.post('/alunos/atualizar/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const { nome, media } = req.body;

    // Verifica se os campos são válidos
    if (!nome || !media) {
        return res.status(400).json({ mensagem: 'Campos inválidos' });
    }

    // Verifica se o aluno na posição indicada existe
    if (index < 0 || index >= alunos.length) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    // Atualiza o aluno na posição indicada
    alunos.splice(index, 1, { nome, media });

    // Atualiza o aluno exercício V
    atualizarDbJson(alunos);

    // Retorna o aluno atualizado
    res.json(alunos[index]);
});

/////////////////////////          Atividade V        //////////////////////////

function atualizarDbJson(alunos) {
  fs.writeFile('db.json', JSON.stringify(alunos), err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Arquivo db.json atualizado!');
    }
  });
}


/////////////////////////          Atividade VI        //////////////////////////
/////////////////////////          Atividade VII        //////////////////////////
/////////////////////////          Atividade VIII        //////////////////////////


/////////////////////////          RODA AS REQUISIÇÕES        //////////////////////////
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/alunos");
});
