export const name="sailboat-duotone";
export const id="dl_20843bcb5d024ae89a1f";
export const url=new URL("../icons/S/sailboat-duotone.svg?v=faaca9c4928d5fac02e6ba9d6e2039da9fda9757b2225f9d7516bdec76292cdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
