export const name="currency-inr-thin";
export const id="dl_20213b4a217140b58cc7";
export const url=new URL("../icons/currency-inr-thin.svg?v=4a1047b7f3f29aca14b159b8231125a569bdb3a810101b9fcc3ad2ac3ecab120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
