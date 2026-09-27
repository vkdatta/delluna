export const name="lucid_1-candy";
export const id="dl_9527495a200f44b095fe";
export const url=new URL("../icons/lucid_1-candy.svg?v=3de2b5a26efba9bb85bcddc51842ece6c1d1e9bc42faf47328187737b0f5b76d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
