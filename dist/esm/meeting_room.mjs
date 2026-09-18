export const name="meeting_room";
export const id="dl_8ddc3e0c64ea4a29ab06";
export const url=new URL("../icons/meeting_room.svg?v=1c584a00ae68688cdaaefd06f39395571d5782364ac44eb3d4d574bbe03c9686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
