export const name="mintmark-fill";
export const id="dl_412e66f610d74354b813";
export const url=new URL("../icons/M/mintmark-fill.svg?v=ffd5c1cf22f56bafd1350817d8177b3ad273cde742a37ebb6fbe1e3492ff85c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
