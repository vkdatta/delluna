export const name="medal-military-duotone";
export const id="dl_7c2d0446bf464278949b";
export const url=new URL("../icons/medal-military-duotone.svg?v=66308df2b5faabc73de522f4721b63e9d87e9872a82e1ac798737aef6a6bd02c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
