export const name="shopping-bag-open-duotone";
export const id="dl_ad072146ef09521d7e2a";
export const url=new URL("../icons/shopping-bag-open-duotone.svg?v=24606526d4777009adc0ae6e91bea97bea3fff17e5faaa7c8b280b057674f560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
