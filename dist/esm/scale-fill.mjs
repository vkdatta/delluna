export const name="scale-fill";
export const id="dl_b18f3019cb8d9963069d";
export const url=new URL("../icons/scale-fill.svg?v=1e8dc1c7e14342f094e72789b69d2a18207f7ef31958142199acd9304a304be0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
