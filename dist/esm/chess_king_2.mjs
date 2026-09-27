export const name="chess_king_2";
export const id="dl_1888ce2ac1e02389a6ad";
export const url=new URL("../icons/chess_king_2.svg?v=9460fb6bee70c1ea8dbda8b0290a56f7f09119aaec3585affd9e276acd9876ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
