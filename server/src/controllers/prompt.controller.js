const InputPrompt = require("../models/import.prompt")
const openai = require("../config/openia")

module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.Configuration()
        const inputModel = new InputPrompt(req.body)
        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion("me de nomes de artigos de node")
            )

            return res.status(200).jason({
                sucess:true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(400).jason({
                sucess: false,
                error: error.response ? 
                error.response.data 
                : "there was an inssue on the server"
            })

        }
    }
}