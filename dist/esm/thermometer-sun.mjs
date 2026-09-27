export const name="thermometer-sun";
export const id="dl_0da0a292502b4b2abbc6";
export const url=new URL("../icons/thermometer-sun.svg?v=68a4d57003aec6ce07faa46450d0cc07c0d7ea1e129ad7bbdbb97362f0bd4353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
