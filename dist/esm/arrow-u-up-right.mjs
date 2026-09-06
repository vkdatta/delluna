export const name="arrow-u-up-right";
export const id="dl_502575aeb8164f658f2e";
export const url=new URL("../icons/arrow-u-up-right.svg?v=9de7342e5986db1610798b58505bed5f390ada73d006761b52c35d30d23e786d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
