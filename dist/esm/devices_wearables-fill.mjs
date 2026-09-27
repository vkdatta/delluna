export const name="devices_wearables-fill";
export const id="dl_d77cfdcb9a38c10474fe";
export const url=new URL("../icons/devices_wearables-fill.svg?v=480fbeef0cce045173c1d150c26c13db26376926046cb4519d0d287a7c0ae100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
