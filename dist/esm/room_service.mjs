export const name="room_service";
export const id="dl_eaeeb424d82e99a92ebb";
export const url=new URL("../icons/room_service.svg?v=923c942bb7bbc97087891092151bd53c61ba5b21b3335f59014039a363bd483d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
