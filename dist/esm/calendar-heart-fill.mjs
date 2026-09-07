export const name="calendar-heart-fill";
export const id="dl_20ec28df513344859e32";
export const url=new URL("../icons/calendar-heart-fill.svg?v=7fcfd703fcedb1ffe4e439a59041d48d96cca556cfdf2ed12acf6c5caf92723d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
