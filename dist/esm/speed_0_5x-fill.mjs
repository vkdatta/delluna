export const name="speed_0_5x-fill";
export const id="dl_7864b50812764f6eb316";
export const url=new URL("../icons/speed_0_5x-fill.svg?v=ba370202c8f549f0e32a2615d77533c3c94ece3b32a36e7f2e2092eb4b7a7d5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
