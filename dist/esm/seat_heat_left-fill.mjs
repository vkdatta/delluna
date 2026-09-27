export const name="seat_heat_left-fill";
export const id="dl_217232c1a47f98a9a8dc";
export const url=new URL("../icons/seat_heat_left-fill.svg?v=991e49e163192a637895598b1b1a0c1b7206e866f2dd525162dad653e3d8902b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
