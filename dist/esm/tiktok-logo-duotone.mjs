export const name="tiktok-logo-duotone";
export const id="dl_3c44078522948b65b998";
export const url=new URL("../icons/tiktok-logo-duotone.svg?v=765a8d49517af54ac7efab1d4f56efbe2507cdf7ab918d5875b54509e1b79ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
