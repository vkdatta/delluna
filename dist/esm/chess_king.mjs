export const name="chess_king";
export const id="dl_32f7d3fbabcc217becf7";
export const url=new URL("../icons/chess_king.svg?v=49ddc8e24942fd21b565456e851a6b646e06cee71318afc0767f2f6913800e1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
