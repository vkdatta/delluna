export const name="filter_1";
export const id="dl_6f441d18096519222260";
export const url=new URL("../icons/filter_1.svg?v=98d8e55f56ae85814862e88cc66d95a64711f09550a1826f7292ae1d2597bc9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
