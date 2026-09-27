export const name="house-duotone";
export const id="dl_26a0ab370547400cbb9a";
export const url=new URL("../icons/house-duotone.svg?v=6f575c5eeaf135584b86d5d2f1a2828500a9210311c55a90352cda2369aee311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
