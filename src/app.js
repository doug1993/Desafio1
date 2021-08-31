const express = require("express");

const cors = require("cors");

const {  uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.use('/repositories/:id',ValidateId)

function ValidateId(req,res,next){
  const {id} = req.params

  if(isUuid(id)){
    return res.status(400).json({error: 'Invalid ID'})
  }
  return next
}

app.get("/repositories", (req, res) => {
  return res.json(repositories)
});

app.post("/repositories", (request, response) => {
  const {title,url,techs} = req.body
   const repo = {id: uuid(),title,url,techs,likes:0}

   repositories.push(repo)

   return res.json(repo)
});

app.put("/repositories/:id", (req, res) => {
  const {id} =req.params
  const {title,url,techs} = req.body

  const repoIndex = repo.findIndex(repo =>repo.id ===id)
  if(repoIndex<0){
    return res.status(400).json({error:'Not Found Repositorie'})
  }
  repo ={
    id,
    title,url,techs
  }

  repositories = repo.findIndex
  return res.json(repo)

});

app.delete("/repositories/:id", (req, res) => {
  const {id} =req.params
  const repoIndex = repo.findIndex(repo =>repo.id===id)

  if(repoIndex< 0){
    return res.status(400).json({error: 'Not Found'})
  }

  repositories.splice(repoIndex, 0)
  return res.status(204).send()
});

app.post("/repositories/:id/like", (req, res) => {
  repo.likes = repo.likes+1 

});

module.exports = app;
