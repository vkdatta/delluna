export const name="android_cell_4_bar-fill";
export const id="dl_6db4eac2dd24fb08c9fc";
export const url=new URL("../icons/android_cell_4_bar-fill.svg?v=d16909f22b05d729623516c2c0e331c68fcf732ff6dd2d849ac0be945efd82dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
