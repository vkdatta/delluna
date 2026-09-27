export const name="contactless-payment-light";
export const id="dl_cf73842fa19f459195da";
export const url=new URL("../icons/contactless-payment-light.svg?v=4fac79a6e728cec50a10ccb48ec0dc31698124d6480a7679692532354d6bc836",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
