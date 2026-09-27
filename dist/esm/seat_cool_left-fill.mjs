export const name="seat_cool_left-fill";
export const id="dl_7ffd7ebc997cd4c9234f";
export const url=new URL("../icons/seat_cool_left-fill.svg?v=af97bed0fe9d2c033ba5b721731739436865f488af606aa11137bbe81e15fdb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
