export const name="move_down-fill";
export const id="dl_6dd5e3455a534897bb2c";
export const url=new URL("../icons/M/move_down-fill.svg?v=3e0db275a2026f77ac45e9c1d3625d2cfb444802731a389e2c5bf31f79ce30da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
