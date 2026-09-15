export const name="devices_wearables-fill";
export const id="dl_ac6b998b31784bdfa3c3";
export const url=new URL("../icons/D/devices_wearables-fill.svg?v=1f4535bc99c9625e7973b96c0fcc2fd8091ba8b1447c284165ca3d708a21cd74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
