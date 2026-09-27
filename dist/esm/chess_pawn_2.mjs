export const name="chess_pawn_2";
export const id="dl_e87211f4ffdbd7d31165";
export const url=new URL("../icons/chess_pawn_2.svg?v=23cc5acad05e3da74443ed0ebb90bf58b58853236c5557d8f87ebf42d66491f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
