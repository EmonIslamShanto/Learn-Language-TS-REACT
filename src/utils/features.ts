import axios from "axios";
import { generate } from "random-words";
export const tranlateWords = async(params: LangType) => {
    try {
        const generatedWords = generate(10);
        console.log(generatedWords);
        const words = (Array.isArray(generatedWords) ? generatedWords : [generatedWords]).map((i) => ({
            Text: i,
        }));

        const {data} = await axios.post('https://microsoft-translator-text.p.rapidapi.com/translate', words,{
            params: {
                "to[0]": params,
                'api-version': '3.0',
                profanityAction: 'NoAction',
                textType: 'plain'
              },
              headers: {
                'x-rapidapi-key': '8630f33dcdmsh4a63bc0aff1eb8fp1e7ce6jsn26058f267f6d',
                'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                'Content-Type': 'application/json'
              },
        })

          console.log(data);

    } catch (error) {
        console.error(error);
        throw new Error("Failed to translate words");
    }
};
