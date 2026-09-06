export const name="gradient-fill";
export const id="dl_6fe592880b60498aa19c";
export const url=new URL("../icons/gradient-fill.svg?v=eec8c1c93bcf37d0b6008455d56a9cdb72012c2c01c44f8dd6daa206f296b6a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
