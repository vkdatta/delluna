export const name="cloud-check";
export const id="dl_9938038ad5c74973a789";
export const url=new URL("../icons/cloud-check.svg?v=f20ac3df6288cb86e643f3d4f8c5c52c5c0ff26f0bfed23fa0cc28af13d48e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
