export const name="money_bag";
export const id="dl_724441c329214aa98408";
export const url=new URL("../icons/M/money_bag.svg?v=bfa84a2c0b9cb9502e1a8a7b9bdf40dd9049a37651407721a9d44ea3fee5bc33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
