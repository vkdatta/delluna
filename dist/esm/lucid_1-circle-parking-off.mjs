export const name="lucid_1-circle-parking-off";
export const id="dl_3b3d211ad8dd4b4dbb41";
export const url=new URL("../icons/lucid_1-circle-parking-off.svg?v=6ddec251692c1c519c35202479494284988b4352c276697feecd9a04d5ff226d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
