export const name="brightness_alert-fill";
export const id="dl_aa0cb993444d4d7aa4e7";
export const url=new URL("../icons/B/brightness_alert-fill.svg?v=2c5a7258f007964949821eb3292b685f5b89200666c4ad75c1167be6cc3236fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
