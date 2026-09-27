export const name="chess_pawn-fill";
export const id="dl_c0bb0fcd2ff706e68c40";
export const url=new URL("../icons/chess_pawn-fill.svg?v=6d7dbb5f3d148d1b58a9190c34e8bbf6c4903e850c683d34fe58bf03cba346f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
