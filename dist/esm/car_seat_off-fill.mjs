export const name="car_seat_off-fill";
export const id="dl_681e8cbf32ff480780c0";
export const url=new URL("../icons/C/car_seat_off-fill.svg?v=7f6fa724d13da9a056c64f26379fa02f475da0e29e5f4fd8a7fc1ef35eebb78b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
