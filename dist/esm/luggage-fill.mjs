export const name="luggage-fill";
export const id="dl_39e365d1846491f43ebe";
export const url=new URL("../icons/luggage-fill.svg?v=d44ba5699e362e3a74b06bc98c3cfc9063f13cb15771c2c912ab97b163f00836",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
