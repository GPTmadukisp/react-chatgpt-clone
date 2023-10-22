const app = require("./app")
const port = process.env.PORT || 3000; // Use a porta 3000 por padrão


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})