export const name="nest_farsight_eco";
export const id="dl_9ef8774906ba135d2d17";
export const url=new URL("../icons/nest_farsight_eco.svg?v=30ca486e93c9219a165b9665d2c2783e1731b211ef50d54123444625243591fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
