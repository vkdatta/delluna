export const name="seat_read-fill";
export const id="dl_57cc6058df78692d8fe5";
export const url=new URL("../icons/seat_read-fill.svg?v=38a9cfbbf45d5527ab716a68849ae62fc16080ae22176c20e8eb2d643f3a885d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
