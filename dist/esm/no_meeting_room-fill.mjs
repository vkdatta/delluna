export const name="no_meeting_room-fill";
export const id="dl_98f7652596714ce0af3d";
export const url=new URL("../icons/no_meeting_room-fill.svg?v=0aac75bcaf3308a008fbefca003e30b7d7fcf40588f650accb238901428be110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
