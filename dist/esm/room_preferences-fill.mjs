export const name="room_preferences-fill";
export const id="dl_347646782a6ec93c7e41";
export const url=new URL("../icons/room_preferences-fill.svg?v=1e3e90e38412d49cd9b9f9e2d8b399c335d72d9891db7872eb981c8b28136f45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
