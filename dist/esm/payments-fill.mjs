export const name="payments-fill";
export const id="dl_8d14fd4c8d1022e278db";
export const url=new URL("../icons/payments-fill.svg?v=0ce965b60db37b10dbda4ab90fac8db86913883cd7d882a06ded4ff50afe7cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
