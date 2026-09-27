export const name="nest_multi_room-fill";
export const id="dl_55519d74053fb75b6efa";
export const url=new URL("../icons/nest_multi_room-fill.svg?v=0600f02b991ffd504eebf225b9c5cd1b73ef48a6989f3316172e01d3d1f9866f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
