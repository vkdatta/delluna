export const name="seat_window-fill";
export const id="dl_2f22f3ad13bc41909571";
export const url=new URL("../icons/seat_window-fill.svg?v=e853cdb94f3eb28341cec6b15c92a1d338e5cff5d02d7d64b2957e96289133a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
