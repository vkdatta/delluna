export const name="swap_calls";
export const id="dl_ef8220b2831aa0514a8e";
export const url=new URL("../icons/swap_calls.svg?v=b011c0f8b0d1e0e585d3ed402fdb09c23fec7030ca4486a8ca390d3df60a1bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
