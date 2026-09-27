export const name="group_remove-fill";
export const id="dl_2442dc5b5d3e8461b0d0";
export const url=new URL("../icons/group_remove-fill.svg?v=a9402f2621d1c0483e481faa13585a4249f28cdeafafbe70759b754cca4e7ca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
