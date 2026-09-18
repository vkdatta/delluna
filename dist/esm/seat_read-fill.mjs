export const name="seat_read-fill";
export const id="dl_06db371088bf4f34a2a4";
export const url=new URL("../icons/S/seat_read-fill.svg?v=2089652582214a669f3c364ba5a5eb54578aa181089bf24c2f34b74370c3215e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
