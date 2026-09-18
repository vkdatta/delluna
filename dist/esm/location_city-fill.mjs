export const name="location_city-fill";
export const id="dl_26392cab044347b8b44a";
export const url=new URL("../icons/location_city-fill.svg?v=60b93bcade67cb2e8521b0b5b83d50302796ea2cee089395ff9d624abf384f96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
