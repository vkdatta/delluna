export const name="mfg_nest_yale_lock-fill";
export const id="dl_2277515cf4f6da9ece6c";
export const url=new URL("../icons/mfg_nest_yale_lock-fill.svg?v=15a98b347d958eeff763991263c9c398317af6f0b0da162f88009b8ab9d3d056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
