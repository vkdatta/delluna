export const name="seat_heat_left-fill";
export const id="dl_64bd5bd5661a63536d20";
export const url=new URL("../icons/seat_heat_left-fill.svg?v=89b9cc58b64f83cd09688b897e1d842df817b4c8ae5ed4ce6dce054ff1e5d809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
