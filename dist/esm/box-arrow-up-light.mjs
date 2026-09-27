export const name="box-arrow-up-light";
export const id="dl_e4653f57a30841a69c25";
export const url=new URL("../icons/box-arrow-up-light.svg?v=09b28babdca6c17a50575d3ce89961e4ea7484d8d40ad57ccd4d6833b5f5c10b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
