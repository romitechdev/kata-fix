import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

// Ganti process.env dengan import.meta.env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const modelId = "gemini-2.5-flash";

export const analyzeText = async (text: string): Promise<AnalysisResult> => {
  const prompt = `
    Anda adalah ahli bahasa Indonesia dan editor profesional. 
    Tugas Anda adalah memeriksa teks berikut untuk menemukan kata-kata yang TIDAK BAKU sesuai dengan Kamus Besar Bahasa Indonesia (KBBI) dan PUEBI.
    
    Teks yang harus diperiksa:
    "${text}"

    Instruksi:
    1. Identifikasi semua kata tidak baku.
    2. Berikan saran kata baku yang benar untuk setiap kata tidak baku.
    3. Tulis ulang teks tersebut menjadi versi yang sepenuhnya baku dan formal, namun tetap mempertahankan makna aslinya.
    4. Berikan nilai persentase (0-100) seberapa baku teks aslinya.

    Format Output JSON (Strict):
    - kata_tidak_baku: Array string berisi kata-kata yang salah.
    - saran_kata_baku: Array object dengan property 'original' (kata salah) dan 'correction' (kata benar).
    - teks_koreksi: String teks lengkap yang sudah diperbaiki.
    - persentase_kebakuan: Number (0-100).
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
            kata_tidak_baku: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Daftar kata yang tidak sesuai KBBI",
            },
            saran_kata_baku: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  original: { type: Type.STRING },
                  correction: { type: Type.STRING },
                },
              },
              description: "Pasangan kata tidak baku dan perbaikannya",
            },
            teks_koreksi: {
              type: Type.STRING,
              description: "Versi teks yang sudah diperbaiki sepenuhnya",
            },
            persentase_kebakuan: {
              type: Type.NUMBER,
              description: "Skor kebakuan teks 0-100",
            },
          },
          required: ["kata_tidak_baku", "saran_kata_baku", "teks_koreksi", "persentase_kebakuan"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as AnalysisResult;
    } else {
      throw new Error("Respon kosong dari Gemini.");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};
