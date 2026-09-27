export const name="airplane-landing-light";
export const id="dl_d0cf9956702b4aa9a58d";
export const url=new URL("../icons/airplane-landing-light.svg?v=53a01bf651b526a0ea803124fdc1a3c25646c3523d5b9869b9b3f1be8b4fbd15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
