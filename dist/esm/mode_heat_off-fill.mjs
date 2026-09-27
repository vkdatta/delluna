export const name="mode_heat_off-fill";
export const id="dl_c538c72c8815e5f5c0b8";
export const url=new URL("../icons/mode_heat_off-fill.svg?v=942a225491e9362454b4b4008153513482192dbb4d515395fe7e2140d15e14cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
