export const name="sailboat-fill";
export const id="dl_c773575096e14f79be78";
export const url=new URL("../icons/S/sailboat-fill.svg?v=996fcb8e244307c70400c9994ca4ada3802da28772cb2278ada92c8de505c873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
