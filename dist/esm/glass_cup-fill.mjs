export const name="glass_cup-fill";
export const id="dl_60a9de04c7fdb6d546b4";
export const url=new URL("../icons/glass_cup-fill.svg?v=47225a16ad1da871736af2dda5d0bdcc5578293d19040e1093c1a7613ce6da76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
