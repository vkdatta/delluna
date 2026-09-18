export const name="room_service";
export const id="dl_c1ac320f04594989a159";
export const url=new URL("../icons/room_service.svg?v=00831b2ee66d802592267f0ade2da2661d154836a23dc304dce944bd8ff2374a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
