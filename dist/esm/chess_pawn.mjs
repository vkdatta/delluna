export const name="chess_pawn";
export const id="dl_2f110e3e05586cdf21ff";
export const url=new URL("../icons/chess_pawn.svg?v=f67790dcdc8ef366ae82c5f12063db088bc454fbd92386c61ed2e324fc8bb174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
