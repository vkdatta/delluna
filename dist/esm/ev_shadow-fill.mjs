export const name="ev_shadow-fill";
export const id="dl_b95bf7e6ef9b90eafc9b";
export const url=new URL("../icons/ev_shadow-fill.svg?v=a094e10f11ce3d1a0ca97c2acfb74eb63ec63497dd9f85789dcd814b7b0c191e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
