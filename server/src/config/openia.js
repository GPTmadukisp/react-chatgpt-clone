// This code is for v4 of the openai package: npmjs.com/package/openai

const { configDotenv } = require("dotenv");
const { Configuration, OpenAI } = require("openai")

module.exports = class openai {
    static Configuration(){
        const Configuration = new this.Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })
        return new OpenAI(Configuration)
    }

    static textCompletion({prompt}){
        return{
            model: "text-davinci-003",
            prompt: `{prompt}`,
            temperature: 0,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
}
