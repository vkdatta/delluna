export const name="car_seat_off-fill";
export const id="dl_67496114f84ef7205bce";
export const url=new URL("../icons/car_seat_off-fill.svg?v=ac8afe553d9a046cbb3b85e01ce6bde8a03748cf51b8ca78058b1485ac99437f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
