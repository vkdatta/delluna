export const name="walk_bike-fill";
export const id="dl_537c1bc46e2ffaa65ef2";
export const url=new URL("../icons/walk_bike-fill.svg?v=630a8c027a66a9cf3a6b9513fab195cf36260cf284da189b41375ec3c06def29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
