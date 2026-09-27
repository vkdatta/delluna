export const name="spray-bottle";
export const id="dl_fe2442906d9541c70385";
export const url=new URL("../icons/spray-bottle.svg?v=5ee5086580ab9af7751d308a6c8cd1e7d8b20925a7304474cd960d08fb49d24c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
