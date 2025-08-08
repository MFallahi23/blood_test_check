import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface ICBC {
  baso: number;
  eo: number;
  hct: number;
  hgb: number;
  lymph: number;
  mch: number;
  mchc: number;
  mcv: number;
  mono: number;
  mpv: number;
  neut: number;
  plt: number;
  rbc: number;
  rdw: number;
  wbc: number;
}

export const sendCBC = async (cbc: ICBC) => {
  const res = await axios.post(`${BASE_URL}/predict`, cbc, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.data;
};
