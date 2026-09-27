export const name="shield_locked-fill";
export const id="dl_da83d9ceef1769947cd0";
export const url=new URL("../icons/shield_locked-fill.svg?v=31b542ffeda2f71f22bbdd51ee8fea6aa7834ace443a69d346f0dd4dd7f2897c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
