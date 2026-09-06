export const name="lucid_1-arrow-down-1-0";
export const id="dl_c6bd5e17ed764e6687a9";
export const url=new URL("../icons/lucid_1-arrow-down-1-0.svg?v=30db6a963cbb601821af2c0924f12768c39c5e450f909873e3ba48e80803f03d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
