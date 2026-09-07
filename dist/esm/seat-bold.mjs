export const name="seat-bold";
export const id="dl_dfc5941e7ba34950a3c1";
export const url=new URL("../icons/S/seat-bold.svg?v=db48dac5a8a7361cbb2cc8ae3e921ce75a47c6571cf10caf3c2325e09770deef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
