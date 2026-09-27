export const name="move";
export const id="dl_a5eae5c30028142a7c28";
export const url=new URL("../icons/move.svg?v=ebb664f251c1773196caa2d5ac3342960a9ab522aa68982ba9d70624c2cfac04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
