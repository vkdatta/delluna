export const name="travel_explore-fill";
export const id="dl_2fbb8b570042da743dcc";
export const url=new URL("../icons/travel_explore-fill.svg?v=a354c68c48f83aa46171d1c671eb1c6d31a0340a10945147ac86cad22c164ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
