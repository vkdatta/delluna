export const name="wifi-low-fill";
export const id="dl_246fe9fffe7d4076b577";
export const url=new URL("../icons/W/wifi-low-fill.svg?v=384579ace95e041a5f32f2204d45234e30f1ae70ec9ae29563bceb5067a818c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
