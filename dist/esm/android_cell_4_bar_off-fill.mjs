export const name="android_cell_4_bar_off-fill";
export const id="dl_e1ba641f03a440e98652";
export const url=new URL("../icons/android_cell_4_bar_off-fill.svg?v=94807a59d808cdfbe523023c4dbbbeb086fbae09698ad2a9557b21edffc05c60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
