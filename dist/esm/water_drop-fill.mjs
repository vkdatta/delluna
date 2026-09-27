export const name="water_drop-fill";
export const id="dl_8adf0b7c4b81d5353b5c";
export const url=new URL("../icons/water_drop-fill.svg?v=d6380d14fa3b957ecb464096a3f28f1ea185e8a63bc339ca70a0ef807ffdc0a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
