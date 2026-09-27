export const name="currency-dollar-simple-light";
export const id="dl_46e1184511c044dcb171";
export const url=new URL("../icons/currency-dollar-simple-light.svg?v=7c176f479406b7e7bbca17423b36fa9da7d7ea1edf46d8d2a0b188a6f5507dc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
