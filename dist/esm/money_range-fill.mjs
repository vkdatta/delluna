export const name="money_range-fill";
export const id="dl_f76e6f9ba2bc6ee3cc40";
export const url=new URL("../icons/money_range-fill.svg?v=c77ef06cff54bd5e294fea35e263dbb9d7c93447bc61a4411a958054daca13e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
