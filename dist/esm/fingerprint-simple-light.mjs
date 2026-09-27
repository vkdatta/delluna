export const name="fingerprint-simple-light";
export const id="dl_c533d8d9fa6c47dab7fe";
export const url=new URL("../icons/fingerprint-simple-light.svg?v=5b4a7dc2734b378f00da4c67c1be5d03649a67745b2f4add14f8b6759e4e3811",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
