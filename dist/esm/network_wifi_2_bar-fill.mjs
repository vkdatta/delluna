export const name="network_wifi_2_bar-fill";
export const id="dl_163311f76011173c3bcd";
export const url=new URL("../icons/network_wifi_2_bar-fill.svg?v=9cdd69d27175a0762184d52feb7ee2416ab836d19af218aefc755f8217320600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
