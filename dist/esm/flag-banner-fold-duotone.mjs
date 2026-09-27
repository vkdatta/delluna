export const name="flag-banner-fold-duotone";
export const id="dl_9881eb482d7b453f9947";
export const url=new URL("../icons/flag-banner-fold-duotone.svg?v=7856b2affc61010294ddee9e034992a27b393f9d8416a8fe19e330f90cc7e591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
