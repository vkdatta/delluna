export const name="chess_pawn_2-fill";
export const id="dl_80ab3f9515ed0628f69b";
export const url=new URL("../icons/chess_pawn_2-fill.svg?v=2d1e34b853163f29a18f5d5137111236e21e63611cc164f621df62ef1a1f9de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
