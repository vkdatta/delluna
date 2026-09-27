export const name="football-helmet-fill";
export const id="dl_db3590c464694d409af9";
export const url=new URL("../icons/football-helmet-fill.svg?v=9519f0b09841b1ec4c43311d1dea6add2caaa8f14c863dbb4c18f06eb5a424b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
