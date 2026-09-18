export const name="android_cell_5_bar_plus-fill";
export const id="dl_6f3e725174de461ebab8";
export const url=new URL("../icons/android_cell_5_bar_plus-fill.svg?v=08430d6cf53847cee5bb5dc0709d1a30ccb4ff3dcd88b816dd145ec0c5dc2c66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
