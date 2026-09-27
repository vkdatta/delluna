export const name="lucid_3-map-pinned";
export const id="dl_6df0129632644f6497b3";
export const url=new URL("../icons/lucid_3-map-pinned.svg?v=11296cb8eeb4c84e36a463dacaae05ca3255868ce811d8bc34a4a3751b553cc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
