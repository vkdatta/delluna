export const name="user-switch-duotone";
export const id="dl_6ca661e04a687a4d674f";
export const url=new URL("../icons/user-switch-duotone.svg?v=bac5416b9aaf2091d520eabfc8b8fb047185d985a636adf97b4ea50c0cd254b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
