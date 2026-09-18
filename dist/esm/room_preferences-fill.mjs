export const name="room_preferences-fill";
export const id="dl_85c97a009f74419f8e5c";
export const url=new URL("../icons/R/room_preferences-fill.svg?v=80f75ed4472d6a5cf1dfa2ecb106500488c8d64953896149ef6eabd146e63c28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
