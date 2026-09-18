export const name="chess_pawn_2-fill";
export const id="dl_a2ce92119e7c463aba0d";
export const url=new URL("../icons/chess_pawn_2-fill.svg?v=d8f895ed306c21caa91c2aa46d4059d6ab6c7a35833bd1a9b421af6c56761b6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
