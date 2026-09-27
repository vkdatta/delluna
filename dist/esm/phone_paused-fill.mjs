export const name="phone_paused-fill";
export const id="dl_578596db5109ab78d033";
export const url=new URL("../icons/phone_paused-fill.svg?v=02c53fb6656e376b94b626d23d3bdfcb289968b3cd424c5b63b1943d4f667b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
