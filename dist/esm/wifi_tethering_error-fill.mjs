export const name="wifi_tethering_error-fill";
export const id="dl_5ef9e746fdc0901d26fe";
export const url=new URL("../icons/wifi_tethering_error-fill.svg?v=5f2185fc9186e8150eccd48af56cd5a4c10c20ab440544c585ee6e5f731d29f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
