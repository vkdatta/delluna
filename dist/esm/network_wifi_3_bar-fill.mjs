export const name="network_wifi_3_bar-fill";
export const id="dl_575500d2a1374e8db0f4";
export const url=new URL("../icons/network_wifi_3_bar-fill.svg?v=c79f05f162ddcfeb478f01ff1700b89b8847db7386b862d525c83267c7cb0c65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
