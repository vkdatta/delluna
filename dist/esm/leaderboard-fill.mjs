export const name="leaderboard-fill";
export const id="dl_f59372a68588c2aba75f";
export const url=new URL("../icons/leaderboard-fill.svg?v=46148b94b0ecd9bf1c21d33b3e419978b9179ff16ba23d73e435875c941ab437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
