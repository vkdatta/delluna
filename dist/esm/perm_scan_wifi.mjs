export const name="perm_scan_wifi";
export const id="dl_0805af4a5100fcbf0d9b";
export const url=new URL("../icons/perm_scan_wifi.svg?v=eaaf09859aebdbc59b8d655540df43d494aa9cc8b86e67a5ad5d091bb1d5d7bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
