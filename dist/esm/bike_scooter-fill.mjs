export const name="bike_scooter-fill";
export const id="dl_fa95a3ae030c99ec0329";
export const url=new URL("../icons/bike_scooter-fill.svg?v=9c5461335f468f3a63e1b76744903008c9e5160d9f142653b81726bc11c8edde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
