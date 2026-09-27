export const name="room_service-fill";
export const id="dl_4cd440822c55ee035d5f";
export const url=new URL("../icons/room_service-fill.svg?v=4370183fcfc3ff1b7a3bd389545f4a82a60709f7abfcc9874a58f4ec6422123a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
