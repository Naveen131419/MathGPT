// import { Configuration, OpenAIApi } from "openai"

// const openAi = new OpenAIApi(
//     new Configuration({
//       apiKey: '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',
//     })
//   )  

// export async function sendMsgToOpenAI(message){
//     const res = await openAi.createChatCompletion({
//         model: "gpt-4",
//         messages: [{ role: "user", content: `Give me the python code to execute the following query along with the necessary print statements: ${message}, just give the code without any extra text`}],
//     })
//     return res.data.choices[0].message.content;
// }

// import { Configuration, OpenAIApi } from "openai";

// const openAi = new OpenAIApi(
//     new Configuration({
//         apiKey: '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',
//     })
// );

// export async function sendMsgToOpenAI(message) {
//     const res = await openAi.createChatCompletion({
//         model: "gpt-4",
//         messages: [{
//             role: "user",
//             content: `Give me the python code to execute the following query along with the necessary print statements: ${message}, just give the code without any extra text`
//         }],
//     });

//     const pythonCode = res.data.choices[0].message.content;

//     // Create a Blob containing the Python code
//     const blob = new Blob([pythonCode], { type: "text/plain" });

//     // Create a download link and trigger a click to download the file
//     const downloadLink = document.createElement("a");
//     downloadLink.href = URL.createObjectURL(blob);
//     downloadLink.download = "output.py";
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);

//     // Return the Python code
//     return pythonCode;
// }

import { Configuration, OpenAIApi } from "openai";

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: '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',
  })
);

export async function sendMsgToOpenAI(message) {
  const res = await openAi.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: `Give me the python code to execute the following query along with the necessary print statements: ${message}, just give the code without any extra text`,
      },
    ],
  });

  const pythonCode = res.data.choices[0].message.content;

  // Trigger download of Python code as a file
  const blob = new Blob([pythonCode], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "generated_code.py";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Return the Python code
  return pythonCode;
}


