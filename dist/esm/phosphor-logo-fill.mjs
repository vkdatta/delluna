export const name="phosphor-logo-fill";
export const id="dl_7d9c7576513349c6aea0";
export const url=new URL("../icons/phosphor-logo-fill.svg?v=f0d16c598496a177e164e7cd3ae52ec6ed1a1d96be77857bc41c338078ed9911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
