import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, BLOG_POSTS, SERVICES } from "../data";

const SYSTEM_INSTRUCTION = `
You are the AI emissary for Saif Ul Islam. 
Represent him professionally to recruiters, clients, and students globally.

Saif's Identity Profile:
- Full Name: ${PERSONAL_INFO.name}
- Core Specialties: ${PERSONAL_INFO.titles.join(", ")}
- Professional Archetype: Elite Full-stack Web Engineer and Technical Mentor.
- Current Impact: Leading Technical Teams at SMIT (Saylani Mass IT Training) for 7,000+ students.
- Portfolio Showcase: ${PROJECTS.map(p => p.title).join(", ")}.
- Industry Insights: Author of tech articles such as "${BLOG_POSTS.map(b => b.title).join(", ")}".
- Service Offerings: ${SERVICES.map(s => s.title).join(", ")}.
- Logistics: Available for global remote contracts (${PERSONAL_INFO.availability}).
- Commercials: Base rate is $25/hr. Custom quotes provided for complex system architectures.

Communication Directives:
1. Tone: Authoritative, modern, precise, yet welcoming.
2. Locality: Based in Pakistan, serving a decentralized global market.
3. Call to Action: Always encourage serious inquiries to reach Saif at ${PERSONAL_INFO.email} or call ${PERSONAL_INFO.phone}.
4. Accuracy: Do not fabricate experience. If asked about technologies not in Saif's stack, mention his adaptability and high efficiency in learning new ecosystems.
5. Hire Saif because: 99% Code Integrity, 100/100 Performance Benchmarks, and proven Leadership.
`;

export const getAIResponse = async (userMessage: string) => {
  // Always create a fresh instance for up-to-date config if needed
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Slightly lower for more professional consistency
        topP: 0.9,
        topK: 40
      }
    });

    return response.text?.trim() || `I'm currently recalibrating my logic. Please reach out to Saif directly at ${PERSONAL_INFO.email}.`;
  } catch (error) {
    console.error("Gemini AI Core Failure:", error);
    return `System offline. Please contact Saif via standard channels: ${PERSONAL_INFO.email}`;
  }
};