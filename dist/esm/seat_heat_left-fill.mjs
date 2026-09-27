export const name="seat_heat_left-fill";
export const id="dl_14a429c26ce8f3287ca0";
export const url=new URL("../icons/seat_heat_left-fill.svg?v=7a019543bb083fc8e7013fd6689d492c2cdbf5d5dd16fcc0e07e3c4478b4e153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
