export const name="perm_scan_wifi-fill";
export const id="dl_a2e6cec48cd8e4dba504";
export const url=new URL("../icons/perm_scan_wifi-fill.svg?v=c9b2b8c1ff60ae5b646f93d92e6ce129dddb81eed1228a8496a5971e6090f593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
