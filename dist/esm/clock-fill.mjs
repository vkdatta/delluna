export const name="clock-fill";
export const id="dl_a366325497464c7eba43";
export const url=new URL("../icons/clock-fill.svg?v=df01a5a7d649cb2ce91832bc54d0cf6a10515ab598c2bac4d5f99ed859c8858d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
