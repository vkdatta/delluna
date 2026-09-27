export const name="seat_cool_left-fill";
export const id="dl_f36810f2ba528d705aef";
export const url=new URL("../icons/seat_cool_left-fill.svg?v=70fc7819b1c30e618edc6a78e260b664e95dc47d66344207b4148e5e514661ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
