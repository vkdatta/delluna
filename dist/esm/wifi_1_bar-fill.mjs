export const name="wifi_1_bar-fill";
export const id="dl_b2afe2676428060f580d";
export const url=new URL("../icons/wifi_1_bar-fill.svg?v=8daa37abb99766987cff29544a528212a5cf1d0b3a56b6c814153b1fa787deb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
