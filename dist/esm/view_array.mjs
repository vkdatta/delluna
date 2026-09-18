export const name="view_array";
export const id="dl_b8498f62d7d344c39d8a";
export const url=new URL("../icons/V/view_array.svg?v=e978109c7c7129175e67feb5fd09b566b86dab8072b3a54251d297034bd5235f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
