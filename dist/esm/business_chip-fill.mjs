export const name="business_chip-fill";
export const id="dl_579b85b5ba602dedad19";
export const url=new URL("../icons/business_chip-fill.svg?v=03d3ad9eedd6c4f5a420fd4ad445dd24292a10c064738cfa34c0a9bc393aaf79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
