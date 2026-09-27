export const name="battery_plus";
export const id="dl_54fa937ba79cccce219a";
export const url=new URL("../icons/battery_plus.svg?v=6b9b3f92870ba8eaad6c7fb80f843587f6d853a6b2a9b138092bb5408c9c3b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
