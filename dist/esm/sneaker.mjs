export const name="sneaker";
export const id="dl_cc67f26bec09722b8f49";
export const url=new URL("../icons/sneaker.svg?v=efc2e052f742360113321e0d2f229f0d8812c6c618fa14d2047c3b98d543915f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
