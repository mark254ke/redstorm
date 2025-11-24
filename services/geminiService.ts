import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from '../types';

// Ensure API key is present
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const analyzeProjectIdea = async (idea: string): Promise<AnalysisResult> => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const modelId = "gemini-2.5-flash";
  
  const prompt = `
    You are a Senior Technical Consultant at Redstorm Labs. 
    Analyze the following project idea for a potential MVP (Minimum Viable Product).
    Idea: "${idea}"
    
    Provide a structured JSON response with:
    1. A feasibility score (Low/Medium/High) and brief reason.
    2. Recommended Tech Stack (Array of strings, prioritize Flutter, Python, FastAPI, and PostgreSQL).
    3. Estimated Time to MVP (e.g. "2-4 Weeks").
    4. A concise executive summary of how Redstorm Labs would approach this.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            feasibility: { type: Type.STRING },
            techStack: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            estimatedTime: { type: Type.STRING },
            summary: { type: Type.STRING }
          },
          required: ["feasibility", "techStack", "estimatedTime", "summary"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AnalysisResult;
  } catch (error) {
    console.error("AI Analysis failed:", error);
    throw error;
  }
};