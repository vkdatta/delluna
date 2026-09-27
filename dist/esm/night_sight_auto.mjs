export const name="night_sight_auto";
export const id="dl_c9a37a5508f390ec0fba";
export const url=new URL("../icons/night_sight_auto.svg?v=2c06167f91ba5c1a711e72e8e835d334beaf44ffef2933be93b23806614fa57a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
