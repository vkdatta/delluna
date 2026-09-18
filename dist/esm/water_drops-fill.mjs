export const name="water_drops-fill";
export const id="dl_9a9b3debe6a14424bde4";
export const url=new URL("../icons/W/water_drops-fill.svg?v=1d6c2fc30ab76b335d7f2d91964099d94e383bc49beb7a6f51dd55628051fc88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
