export const name="chess_pawn_2";
export const id="dl_278de5143e49d1e71f60";
export const url=new URL("../icons/chess_pawn_2.svg?v=1e12ef230f457fae699188250c6a4c3abba18995d2af41b1d08a9a6dea10efaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
