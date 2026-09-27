export const name="chess_pawn_2";
export const id="dl_87b7d2c0cbc2b773b0e2";
export const url=new URL("../icons/chess_pawn_2.svg?v=63adddd768089bf486dd9b9e99b797477cf9f5fd4415fcc6f9fc74d27d19aadf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
