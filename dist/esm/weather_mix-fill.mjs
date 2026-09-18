export const name="weather_mix-fill";
export const id="dl_f55d558d3ef24eab9a84";
export const url=new URL("../icons/weather_mix-fill.svg?v=593f51efdfa54542cadc23a12a1d89029dc98b7d2d74da3d45fc5a9775242d95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
