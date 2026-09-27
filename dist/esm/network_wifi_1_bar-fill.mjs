export const name="network_wifi_1_bar-fill";
export const id="dl_c152f6324e82de16b080";
export const url=new URL("../icons/network_wifi_1_bar-fill.svg?v=e85e56e0329e3564de65ede879062af6932a48f9734927e679a688524d222f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
