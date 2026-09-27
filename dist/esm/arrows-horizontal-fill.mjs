export const name="arrows-horizontal-fill";
export const id="dl_8806353c4725496188e0";
export const url=new URL("../icons/arrows-horizontal-fill.svg?v=da1e90068034546a25061aed5fdda624b299bae77c920a598000155614caf5c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
