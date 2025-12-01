export interface CorrectionPair {
  original: string;
  correction: string;
}

export interface AnalysisResult {
  kata_tidak_baku: string[];
  saran_kata_baku: CorrectionPair[];
  teks_koreksi: string;
  persentase_kebakuan: number;
}
