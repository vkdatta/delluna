export const name="exposure_zero-fill";
export const id="dl_dd46d20b79ed11d72c04";
export const url=new URL("../icons/exposure_zero-fill.svg?v=0a04813a5b692485fb13247773ec963d5ffee3d8ac295c48dfc105faa11ed739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
