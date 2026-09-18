export const name="perm_scan_wifi-fill";
export const id="dl_c6fa6a33786148f6b57d";
export const url=new URL("../icons/P/perm_scan_wifi-fill.svg?v=0e08de4e8cdb054a54de2d1b8bd510fe02c0c2c785034727fe6cc77305c89ace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
