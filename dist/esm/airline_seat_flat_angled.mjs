export const name="airline_seat_flat_angled";
export const id="dl_4c2bfd77c3f875c7dbec";
export const url=new URL("../icons/airline_seat_flat_angled.svg?v=e90ed6dc39549024998ae7a927d8854002ebabfe2602a8fe8712dfe35c9f71e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
