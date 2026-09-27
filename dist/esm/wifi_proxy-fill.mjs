export const name="wifi_proxy-fill";
export const id="dl_ae367f39f1da018fcd85";
export const url=new URL("../icons/wifi_proxy-fill.svg?v=8e916cc02f6d24b01a96341d086621d8ec441c266efb03dd1223fb7a10ecc8bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
