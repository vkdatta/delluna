export const name="less-than-or-equal-bold";
export const id="dl_ceee8d7a6fff44848137";
export const url=new URL("../icons/less-than-or-equal-bold.svg?v=0c77d1de919540cb42de7757dffe696a818c1e10cabb0677bf3630b43c9f391a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
