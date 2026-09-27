export const name="meeting_room";
export const id="dl_476e7235bd5cf3bf00e2";
export const url=new URL("../icons/meeting_room.svg?v=cc101c0985333bda7b7ddcaa4cf06adcdad7bbd304cf82d5d36cb735eb3d4855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
