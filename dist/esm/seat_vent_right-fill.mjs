export const name="seat_vent_right-fill";
export const id="dl_42b411ec6497031e6059";
export const url=new URL("../icons/seat_vent_right-fill.svg?v=5a7bf9fed8fe8536cebac3c8375ec55a50ceb1e5e14cc25ffc701491cf97c5c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
