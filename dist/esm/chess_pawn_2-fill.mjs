export const name="chess_pawn_2-fill";
export const id="dl_af07eb5eb17d3f9e4743";
export const url=new URL("../icons/chess_pawn_2-fill.svg?v=380bcae9d1efa05270b1292e29eae729aad857b69673e26d6eb3d71e7773bc55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
