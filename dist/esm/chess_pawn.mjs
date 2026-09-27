export const name="chess_pawn";
export const id="dl_0c2e8c07a0cadc65a745";
export const url=new URL("../icons/chess_pawn.svg?v=9657483797bac95dffe2f608f0896f5906ce0e67fa86ec922934f95eab0f6763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
