import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`
  }
});

export const getTravelIdeas = async (data) => {
  const prompt = `Hello, I'm ${data.name} and want to make a travel with me and ${data.paxNumber} more person to somewhere. The idea for this travel is that we like a trip to know places that is ${data.travelType} based. Today I'm located in ${data.location} and about the how much I want to expend the base is ${data.cashAmount}. I know you don't have information in real-time about the prices, but what I want is 3 options for a good trip with the informations that I provide.`;

  const response = await openai.post('/engines/davinci-codex/completions', {
    prompt,
    max_tokens: 200,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    language: 'pt-br'
  });

  return response.data.choices[0].text.trim();
};
