export const name="airline_seat_recline_normal";
export const id="dl_9f86863204df91817920";
export const url=new URL("../icons/airline_seat_recline_normal.svg?v=d67ba6f42759d4a8a46dd5e81b7ea8e1bc9371ad67f582ce3c4760ddc6a28e3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
