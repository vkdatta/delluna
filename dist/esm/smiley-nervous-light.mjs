export const name="smiley-nervous-light";
export const id="dl_1da0cedbfac39e3717d4";
export const url=new URL("../icons/smiley-nervous-light.svg?v=0e08207e3a1bd095b0a2a7a93ebd311d066c53010e5c3627e6ea37b46055f658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
