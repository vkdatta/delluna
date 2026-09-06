export const name="cooking-pot";
export const id="dl_91ecbff169314cbab0e0";
export const url=new URL("../icons/cooking-pot.svg?v=d0677b6188273ea4c70a549b3e233c2356bcf1329c505bed496ac2eeea4fa7f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
