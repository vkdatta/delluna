export const name="arrows-in-line-horizontal-light";
export const id="dl_630dc3cc35a54d2c9351";
export const url=new URL("../icons/arrows-in-line-horizontal-light.svg?v=4c55d2ed7d2efc4177c43a8db9ccb603adb787ef2634d5af639c241ee6b9ceb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
