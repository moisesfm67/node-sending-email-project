import "reflect-metadata";
import "./database";
import express, { Request, Response } from "express";

const app = express();

/*
get => busca
post => salvar
put => alterar
delete => deletar
patch => alteração específica
*/
//http://localhost:3333/users

app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "hello worlds" });
});

//1 param => rota(recurso)
//2 param => request, response

app.post("/", (request: Request, response: Response) => {
  //recebeu os dados para salvar

  return response.json({ message: "Os dados foram salvos com sucesso" });
});

app.listen(3333, () => console.log("server is runing"));
