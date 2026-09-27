export const name="spatial_tracking-fill";
export const id="dl_dab2ff44ad03a4bec8c5";
export const url=new URL("../icons/spatial_tracking-fill.svg?v=16b4068420fe7673e0be9d6afc8e272a381925eccc4b309ed1c20a9b5d33a907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
