export const name="mobile_sensor_lo-fill";
export const id="dl_cd2b09f2543bb5154b7d";
export const url=new URL("../icons/mobile_sensor_lo-fill.svg?v=ef4b977cc1e5da3fc6e83058def001aa6886d23ac56913763175e20e9fa7f904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
