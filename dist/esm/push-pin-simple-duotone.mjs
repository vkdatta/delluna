export const name="push-pin-simple-duotone";
export const id="dl_3c4bac22ea364cf68f04";
export const url=new URL("../icons/push-pin-simple-duotone.svg?v=32fb531127409eefc51ba44fddffbe1f7d0cb7eb1cd089e88f7c774169d30b2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
