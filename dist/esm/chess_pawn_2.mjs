export const name="chess_pawn_2";
export const id="dl_fe37bb1d41394ec3a6fa";
export const url=new URL("../icons/C/chess_pawn_2.svg?v=d2f6126f2732d34ce08347d22540b2904526626f7ae7f18625fa42fe16034eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
