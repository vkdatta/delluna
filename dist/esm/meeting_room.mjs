export const name="meeting_room";
export const id="dl_2be2dd06923041696337";
export const url=new URL("../icons/meeting_room.svg?v=5ce37f5e4c1269d635e2b9d882111f3422de4772f71b115d66478421acff87a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
