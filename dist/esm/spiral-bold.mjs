export const name="spiral-bold";
export const id="dl_815b8caeb56c40d1aff7";
export const url=new URL("../icons/S/spiral-bold.svg?v=0d765136d13585683183484c4db197375eb3765585ab35a075a50c5ae76026dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
