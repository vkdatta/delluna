export const name="your_trips";
export const id="dl_82a90c7b3407f6c388b3";
export const url=new URL("../icons/your_trips.svg?v=067cd1760afa56b2088615820cdbdaf02d3af6747cd6469d344a66d24ae1dfc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
