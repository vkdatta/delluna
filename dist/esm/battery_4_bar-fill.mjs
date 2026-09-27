export const name="battery_4_bar-fill";
export const id="dl_83f9843caac94a1af31d";
export const url=new URL("../icons/battery_4_bar-fill.svg?v=eec9c6dd2386029635c273b2032d12fbd57e360115a444e174071d48c9f0b44f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
