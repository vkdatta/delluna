export const name="text-h-four-light";
export const id="dl_533f16ae505494b80a3c";
export const url=new URL("../icons/text-h-four-light.svg?v=f42ff4054e9fec87f906bd0acdbdfe3443ebc645fac86359f9ce6c56edffa5ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
