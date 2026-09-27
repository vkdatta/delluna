export const name="airline_seat_flat-fill";
export const id="dl_ddfddb7ea4d3fe18b02a";
export const url=new URL("../icons/airline_seat_flat-fill.svg?v=cedb5dd6d098138c662eb1e0ac9e49cc252c0ed65f7524b4544e3a80038ddd68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
