export const name="lucid_1-calendar-clock";
export const id="dl_007297fd1391493da0bc";
export const url=new URL("../icons/lucid_1-calendar-clock.svg?v=69137f91d38ec457049b37d0355dfdcf2d2ddabf32c604ec8386e867d62c712d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
