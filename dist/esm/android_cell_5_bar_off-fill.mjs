export const name="android_cell_5_bar_off-fill";
export const id="dl_37ee3dbce4113876b754";
export const url=new URL("../icons/android_cell_5_bar_off-fill.svg?v=87a1c9f2f831627a53d28fadc39990fbb967f586493380d11132b6950aff5aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
