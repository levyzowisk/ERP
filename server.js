// importanto express

const express = require('express');
const cors =  require('cors');
const sequelize = require('./config/database');

const app = express();


app.use(express.json());
app.use(cors());

const PORT = 3000;



app.get('/', (req,res) => {
    
    res.send('A requisição chegou no Endpoint. DevLevy');
    // console.log('requisição chegou');
    

})

app.listen(PORT, () => {
    sequelize.authenticate()
    .then( () => {
        console.log("Conexão estabelezida com sucesso!");
    }
    )
    .catch(err => {
        console.erro("Este é o erro",err);
    })
        
    console.log('Servidor está rodando na porta 3000.');
    
})