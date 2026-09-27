export const name="looks_4-fill";
export const id="dl_4d04ec0114cdc3dddf5b";
export const url=new URL("../icons/looks_4-fill.svg?v=84108c621623d012ddd4738097ba14f2d485d5d577bf36c2204df121efe34ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
