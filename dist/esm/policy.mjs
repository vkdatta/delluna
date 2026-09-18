export const name="policy";
export const id="dl_9ec7e24d9b83485c9081";
export const url=new URL("../icons/policy.svg?v=7fada1918ddea550bf1d63d73f0eeb7cc3960010316d7905ffc2d92efee0939e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
