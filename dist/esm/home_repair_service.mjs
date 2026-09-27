export const name="home_repair_service";
export const id="dl_35e4ebfe09284e179d21";
export const url=new URL("../icons/home_repair_service.svg?v=7a6a7f6b71836f7a93be24ca25d38cd35a713504a1fd3b3118673e5771cd52c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
