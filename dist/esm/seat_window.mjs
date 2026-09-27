export const name="seat_window";
export const id="dl_c2bda5b383ae54401b60";
export const url=new URL("../icons/seat_window.svg?v=6341f641d867cb2ac406131db9548b1470d85d0f0ac3b038b1c826bf0237be75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
