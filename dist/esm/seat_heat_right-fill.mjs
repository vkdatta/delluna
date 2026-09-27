export const name="seat_heat_right-fill";
export const id="dl_7b2968ec5d40723d1b2a";
export const url=new URL("../icons/seat_heat_right-fill.svg?v=7dc5359536c152b35189802384a263b3b73bee7e6fe5f367b55e38d5dac114c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
