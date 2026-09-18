export const name="room_preferences";
export const id="dl_5a0d70fd8ea04f97bc63";
export const url=new URL("../icons/room_preferences.svg?v=5f22d7ea5f36745655fe55e8491fd200797dff48dda3a075c40ee3668df5edf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
