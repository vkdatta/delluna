export const name="room_service-fill";
export const id="dl_a5d24912f7e5a84f5d54";
export const url=new URL("../icons/room_service-fill.svg?v=e4322d3bf5f98d2594bba585189671ae936143c205a2603fd20c7306e32355a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
