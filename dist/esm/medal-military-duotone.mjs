export const name="medal-military-duotone";
export const id="dl_7c2d0446bf464278949b";
export const url=new URL("../icons/medal-military-duotone.svg?v=9b2f47a2e6c9cab1f68db44ab3bd2287400d5c8c6d4ace6b250d7a24fad2087b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
