export const name="battery_android_frame_full";
export const id="dl_d4979754440c48dd3046";
export const url=new URL("../icons/battery_android_frame_full.svg?v=203e00232dadf8da7a4460efde334218dbb13e4d32695138ff9f182dcc632b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
