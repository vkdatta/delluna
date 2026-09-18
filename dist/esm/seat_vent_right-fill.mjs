export const name="seat_vent_right-fill";
export const id="dl_f1713042867a40d487eb";
export const url=new URL("../icons/S/seat_vent_right-fill.svg?v=3768ccc241048747351aa3263413597226b223a927539e0a5dcbaaff7caa5d89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
