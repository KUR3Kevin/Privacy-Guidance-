import { GoogleGenAI, Type } from "@google/genai";
import { DashboardData } from "../types";

// Fallback data in case of API failure or missing key
const FALLBACK_DATA: DashboardData = {
  badSites: [
    { name: "PublicPeopleFinder.com", category: "Data Broker", reason: "Aggregates public records without consent", alternative: "Manual county clerk search" },
    { name: "SocialScraper.io", category: "Scraping Tool", reason: "Violates TOS of major platforms", alternative: "Official APIs" },
    { name: "UnsecureFreeWifi.net", category: "Network", reason: "No encryption, tracks user traffic", alternative: "VPN Services" },
  ],
  news: [
    { title: "Major Retailer Suffer SQL Injection Attack", date: "2023-10-24", summary: "Over 5 million user records were exposed due to an unpatched vulnerability.", severity: "High" },
    { title: "New Phishing Campaign Targets Banking Users", date: "2023-10-22", summary: "SMS-based attacks represent a 400% increase in the last quarter.", severity: "Medium" },
  ]
};

export const fetchDashboardData = async (): Promise<DashboardData> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("No API_KEY found. Using fallback data.");
    return FALLBACK_DATA;
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a JSON object containing two lists related to cybersecurity. 
      1. 'badSites': A list of 4 generic examples of types of websites people should avoid to prevent data scraping/theft (e.g., shady data brokers, free VPNs that sell data), including a specific example name, reason, and a privacy-friendly alternative.
      2. 'news': A list of 4 realistic (but simulated if real-time not available) headlines about data breaches, cyber security updates, or tech security news. Include a severity level.
      
      Return ONLY valid JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            badSites: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  category: { type: Type.STRING },
                  reason: { type: Type.STRING },
                  alternative: { type: Type.STRING },
                }
              }
            },
            news: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  date: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  severity: { type: Type.STRING, enum: ["Low", "Medium", "High", "Critical"] }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as DashboardData;
    }
    return FALLBACK_DATA;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return FALLBACK_DATA;
  }
};
