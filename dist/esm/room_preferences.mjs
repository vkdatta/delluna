export const name="room_preferences";
export const id="dl_eaa67df182b5fa525b1c";
export const url=new URL("../icons/room_preferences.svg?v=7e85140f4f970be91b7093b1b25e8dd262c9e8380b6ca453f18c6d4373addf27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
