export const name="wb_iridescent-fill";
export const id="dl_4e825f2b658d44d73ea0";
export const url=new URL("../icons/wb_iridescent-fill.svg?v=078dec6d6c4f09bba9d95880807fc708dff72addc705561fa6960b67042fd918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
