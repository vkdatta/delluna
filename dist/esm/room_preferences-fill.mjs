export const name="room_preferences-fill";
export const id="dl_1201abbd9dbe0f845646";
export const url=new URL("../icons/room_preferences-fill.svg?v=9f7956b1c004c41ebc34de6cdd1b95ff8e79b970c5ef7ef42c2f1f5e5e9aa2ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
