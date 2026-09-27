export const name="night_sight_max";
export const id="dl_0b218b9006ea99a493ae";
export const url=new URL("../icons/night_sight_max.svg?v=667b6922c790856832435583a047fe23eb785e34d233214125dc9f8dff77c02d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
