export const name="dock_to_bottom-fill";
export const id="dl_2252a8574a6391b2acd1";
export const url=new URL("../icons/dock_to_bottom-fill.svg?v=def7d3b46d0a100fb2dd3db208f16cb43b98007090a34c1b7942f0b6b80fbbd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
