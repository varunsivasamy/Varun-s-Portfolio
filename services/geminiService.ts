import { GoogleGenAI } from "@google/genai";
import { PERSONAL_DETAILS, PROJECTS, SKILLS, EXPERIENCE } from '../constants';

const API_KEY = process.env.API_KEY || '';

let aiClient: GoogleGenAI | null = null;

if (API_KEY) {
  aiClient = new GoogleGenAI({ apiKey: API_KEY });
}

const SYSTEM_INSTRUCTION = `
You are an AI Assistant for Varun Sivasamy's personal portfolio website.
Your goal is to answer questions about Varun's skills, projects, experience, and personality based STRICTLY on the context provided below.
Be professional, concise, and friendly. Speak in the first person as if you represent Varun's digital avatar, or third person referring to him as "Varun".

CONTEXT:
Name: ${PERSONAL_DETAILS.name}
Role: ${PERSONAL_DETAILS.roles.join(', ')}
About: ${PERSONAL_DETAILS.about}
Skills: ${SKILLS.map(c => c.title + ': ' + c.skills.join(', ')).join('; ')}
Projects: ${PROJECTS.map(p => `${p.title} (${p.category}): ${p.problem} Tech: ${p.techStack.join(', ')}`).join('; ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company}`).join('; ')}

If a user asks something not in this context (like general math, world history, or coding help unrelated to Varun's projects), politely explain that you are only here to discuss Varun's portfolio.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
    return "I'm sorry, but the AI service is not currently configured (API Key missing). Please contact Varun directly via email.";
  }

  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};
