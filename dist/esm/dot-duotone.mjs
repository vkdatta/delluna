export const name="dot-duotone";
export const id="dl_1d1fe3e885314ec3a723";
export const url=new URL("../icons/dot-duotone.svg?v=190070427a7d7c15336adb7c9ed94178d52c91e38fa8c61c346118e2f2d9c000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
