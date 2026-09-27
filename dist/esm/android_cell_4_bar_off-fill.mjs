export const name="android_cell_4_bar_off-fill";
export const id="dl_ed5b2c5ed62f00825a20";
export const url=new URL("../icons/android_cell_4_bar_off-fill.svg?v=cf5324c75484b8008b1730f016ad77576f455fd6c564b642fdbb85014bafee03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
