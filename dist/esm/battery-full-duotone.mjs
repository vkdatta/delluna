export const name="battery-full-duotone";
export const id="dl_4a38976f34d24dd7866c";
export const url=new URL("../icons/battery-full-duotone.svg?v=b114952fb2cff868d1677a9fba1873384e12a2b6bbdb4441c9ec5f3ae4c90d5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
