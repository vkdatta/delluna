export const name="seat_cool_right-fill";
export const id="dl_9a58cff413a0f2b62935";
export const url=new URL("../icons/seat_cool_right-fill.svg?v=a24a6a0773fadf25681c47e07d2bd04c8baf55d99fc546e11e556abb3b9f072b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
