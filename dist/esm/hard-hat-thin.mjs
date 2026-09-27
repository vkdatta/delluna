export const name="hard-hat-thin";
export const id="dl_e213fccc568a416c829f";
export const url=new URL("../icons/hard-hat-thin.svg?v=768114f585f61ade22c339ca0cf2d63e8448860ada0ceafdc1fe204d0e7d323a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
