export const name="car_lock-fill";
export const id="dl_b16235ece5544ddcac54";
export const url=new URL("../icons/C/car_lock-fill.svg?v=3ec573048dfde28236a2c051d9622d7d4b287db83724ea399ec68d23bacd60d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
