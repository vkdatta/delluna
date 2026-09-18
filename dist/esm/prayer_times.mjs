export const name="prayer_times";
export const id="dl_6323da76e0b84ef98e20";
export const url=new URL("../icons/prayer_times.svg?v=0066eace93c1888017f7a21158760e72f793455c05a1823b0c05e7f3507df042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
