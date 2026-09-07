export const name="seal-check-fill";
export const id="dl_e7c8d59d11fe4b9fbbaa";
export const url=new URL("../icons/S/seal-check-fill.svg?v=27702a62622ac4156d2a18b10fc7c526b3b2b9f782741e2cb07aea6964d71132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
