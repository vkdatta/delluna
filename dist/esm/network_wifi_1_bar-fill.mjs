export const name="network_wifi_1_bar-fill";
export const id="dl_bdac54e67a68b8987c60";
export const url=new URL("../icons/network_wifi_1_bar-fill.svg?v=c0372ee548610b28a69dff4ef96047de47026949e6857640d26e6371a8298bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
