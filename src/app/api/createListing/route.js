import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req) {
  // return new Response("Hello, POST!");

  // Get data submitted in request's body.
  // console.log("req.body: ", req.json()``);

  const body = await req.text();
  // const json = JSON.stringify(body);

  console.log("body: ", body);

  const systemPrompt = `You are a successful real estate agent and the best property marketer in the world. 
  You are writing a listing for a property. You will be provided informatino about the property by the user in JSON format.
  Please write a description of the property in markdown format. 
  Include a section about the property that includes only the features provided to you by the user.
  Include a section about the neighborhood based only on your truthful understanding of the neighborhood.
  Important: Do not use bullet points.
  Very Important: Do not reference property features that are not provided by the user.
  Requirement: Your copy must conform to fair housing laws for the jurisdiction in which the property is located and not include any discriminatory language. 
  If you do not know the fair housing laws for the jurisdiction in which the property is located, please indicate this in your response.
  `;

  const userPrompt = `Please write a property listing based on the information included in this JSON: ${body}`;

  // console.log("prompt: ", prompt);

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });

  // Found the name.
  // Sends a HTTP success code
  // res.status(200).json({ data: `${response.data.choices[0].message.content}` });
  // res.status(200).json({ data: "Hello" });

  return new Response(response.data.choices[0].message.content);
  // return new Response(json);
}
