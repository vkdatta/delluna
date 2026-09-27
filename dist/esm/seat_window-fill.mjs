export const name="seat_window-fill";
export const id="dl_44fe2c6e67ec27cfa742";
export const url=new URL("../icons/seat_window-fill.svg?v=feae38817ade3019cb025dac587234dec014322f1be088ebad381c8e08457508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
