export const name="airline_seat_individual_suite-fill";
export const id="dl_eb467960a8b0d7fd83f5";
export const url=new URL("../icons/airline_seat_individual_suite-fill.svg?v=9fdfb83035c32d790f2775580f22c59100610fe86f8c22b0354a55e91fe50e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
