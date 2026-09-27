export const name="cactus-duotone";
export const id="dl_f827b861e9e441338301";
export const url=new URL("../icons/cactus-duotone.svg?v=44bcdc19a7c2f297d30359c3a2a24b40aaae6ca9b1851515486d00fd97e384f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
