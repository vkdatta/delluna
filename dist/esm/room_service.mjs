export const name="room_service";
export const id="dl_3c6e01c46210f8f5657f";
export const url=new URL("../icons/room_service.svg?v=636fe05f689a1417bd089b2935cc50c7334d1f1366059a9fab119dc652817f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
