export const name="screenshot_monitor-fill";
export const id="dl_c7d351d9a1826466fc41";
export const url=new URL("../icons/screenshot_monitor-fill.svg?v=7f821db1ceeadacc287623a06138eb6d59bba7718bb64c8a0790fdb9c9136fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
