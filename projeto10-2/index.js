const express = require('express');
const app = express();
app.use(require('./rotas'));
console.log(app.get)
const PORT = 5500

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
})