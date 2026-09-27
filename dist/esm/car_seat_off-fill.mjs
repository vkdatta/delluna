export const name="car_seat_off-fill";
export const id="dl_80637c4849d5ff9fbd08";
export const url=new URL("../icons/car_seat_off-fill.svg?v=1b56e68f6c2d875873a1172262ba0492af19f0d4b9af0d4ea837216ceb67a7c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
