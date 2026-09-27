export const name="nest_multi_room";
export const id="dl_60c6fe39af7801c2c27b";
export const url=new URL("../icons/nest_multi_room.svg?v=e66621636402c984fcf919cfe74ea5edea82251c539f957780a5f43d886e231d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
