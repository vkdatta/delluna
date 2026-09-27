export const name="network_wifi_2_bar-fill";
export const id="dl_445f95549034538db7a2";
export const url=new URL("../icons/network_wifi_2_bar-fill.svg?v=f71992be04c9b820ec3b80329a81df47903e5ee09f46b2bb2c1112653b6d6bb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
