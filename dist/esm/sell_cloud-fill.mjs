export const name="sell_cloud-fill";
export const id="dl_c23b0dc467b2a5b9a071";
export const url=new URL("../icons/sell_cloud-fill.svg?v=f15c360f5abd05e91dd05c811dfebc1c71542747722452ede798db62fafc4a5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
