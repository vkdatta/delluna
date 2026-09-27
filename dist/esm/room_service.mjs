export const name="room_service";
export const id="dl_05c51589f4d02b14a8f8";
export const url=new URL("../icons/room_service.svg?v=d967e48145ccadced84034a734d84eb0cc63622d35ae9eb902d227a38cafb7d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
