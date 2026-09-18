export const name="grid_off-fill";
export const id="dl_409de8f798bc47c68c28";
export const url=new URL("../icons/G/grid_off-fill.svg?v=d1776c267c3e7592321f19450c3078af0b1b6632ae4ad89f10338279c36f071d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
