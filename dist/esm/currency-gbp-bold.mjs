export const name="currency-gbp-bold";
export const id="dl_5d261030fb5f4489ac6a";
export const url=new URL("../icons/currency-gbp-bold.svg?v=7369e5ae1a166780faf9505030bd47d9a0b0eb5e49e43b6c1eeb7afdfb02f41f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
