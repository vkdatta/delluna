export const name="network_wifi_2_bar-fill";
export const id="dl_fac164e5dba1cb342277";
export const url=new URL("../icons/network_wifi_2_bar-fill.svg?v=b04e56d373f744f4fa5e479bbd170986fe109e324703a1708933fb9d4b2ae4e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
