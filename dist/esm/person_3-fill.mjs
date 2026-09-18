export const name="person_3-fill";
export const id="dl_d0aabab16b854a7bb870";
export const url=new URL("../icons/person_3-fill.svg?v=38179ab6a94051a4295fe60bd8f481e2c5982193e7c1e53e84f14b9fcb31d932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
