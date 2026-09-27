export const name="network_wifi_locked-fill";
export const id="dl_e65ea96e2669fd8feb1d";
export const url=new URL("../icons/network_wifi_locked-fill.svg?v=ad596bbaecf579ef8c894f02940d8e488ad7a9b63d13ba0e5d874533eadd06a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
