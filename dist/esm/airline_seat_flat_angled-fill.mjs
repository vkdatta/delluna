export const name="airline_seat_flat_angled-fill";
export const id="dl_86f6ff3aaa73d1b1df06";
export const url=new URL("../icons/airline_seat_flat_angled-fill.svg?v=ce76918aa2271ff11494cc2cda7c896fd726ea5845abe036933529239e6abc8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
