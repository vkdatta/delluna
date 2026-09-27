export const name="lucid_2-globe-off";
export const id="dl_5c54e6568ea8446e8193";
export const url=new URL("../icons/lucid_2-globe-off.svg?v=2f780f3d570a831f7e3cc655cff6b89867625fe745ee65ac3a74df0959744412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
