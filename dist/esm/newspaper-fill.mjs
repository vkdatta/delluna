export const name="newspaper-fill";
export const id="dl_e76fa77614e14ec4939f";
export const url=new URL("../icons/newspaper-fill.svg?v=a0262aa22600b4dde63f3718b68b505ab5fcdbd07ea4303ae81b3b73a21e1c2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
