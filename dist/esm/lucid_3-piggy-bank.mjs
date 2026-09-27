export const name="lucid_3-piggy-bank";
export const id="dl_08c4fcf32abe47dfb41a";
export const url=new URL("../icons/lucid_3-piggy-bank.svg?v=c2385c4317c5f2d8c5438483eb5c15012ff5f2b40dfb9adcaeb75c56860094c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
