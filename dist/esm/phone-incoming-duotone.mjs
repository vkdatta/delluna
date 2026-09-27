export const name="phone-incoming-duotone";
export const id="dl_9f6221f820864b188ee0";
export const url=new URL("../icons/phone-incoming-duotone.svg?v=4ec7d738dc600de1a422679c2d08c2a0be77e219da505a9f19902a42e3236292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
