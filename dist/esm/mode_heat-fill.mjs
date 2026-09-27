export const name="mode_heat-fill";
export const id="dl_bff6b79cb2b5352e1a4a";
export const url=new URL("../icons/mode_heat-fill.svg?v=c73b585fce1f90090238d972ef32a9133e4dba1439bf25096801b7e1eb0b5e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
