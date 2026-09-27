export const name="room_preferences-fill";
export const id="dl_762492164f196ea3f4fc";
export const url=new URL("../icons/room_preferences-fill.svg?v=b16c8fccdf1f96ec68b430f926941c11e5e8025a7c1dc79d95cd5c379924a2a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
