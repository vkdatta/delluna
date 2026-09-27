export const name="seat_window-fill";
export const id="dl_8357c50a8f9e62a7569f";
export const url=new URL("../icons/seat_window-fill.svg?v=e8cae6dcbf895fbd30be9dfbdf62eb5a787234abd7046d14cfce8b4e143114c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
