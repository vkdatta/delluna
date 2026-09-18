export const name="ecg-fill";
export const id="dl_0a47e9cc7d8746428aeb";
export const url=new URL("../icons/ecg-fill.svg?v=01733342f67e136e67ec2323bb348d3bfd7a86d3b5d54ea732ce596512da9031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
