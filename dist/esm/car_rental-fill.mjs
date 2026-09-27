export const name="car_rental-fill";
export const id="dl_2cfbf1e56bd89224715a";
export const url=new URL("../icons/car_rental-fill.svg?v=c06c85266b6fb5e14d36f77d0a924e2b066aa42c5839a40ac61bdfb59e516c25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
