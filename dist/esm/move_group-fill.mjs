export const name="move_group-fill";
export const id="dl_eef8145bd3f349fd9ec5";
export const url=new URL("../icons/M/move_group-fill.svg?v=ea7bb0969f68df278a3f389b5422c04e1e756d282b664216c085d6fe544137b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
