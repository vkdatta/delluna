export const name="electric_meter-fill";
export const id="dl_5449605f10e3d5fe3b0b";
export const url=new URL("../icons/electric_meter-fill.svg?v=de7207a9ee857a3d2fc5f28cebb42f2444efa4b7c64b1ea5cccce792146e2bc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
