export const name="burst_mode";
export const id="dl_80857460a6494d5984f4";
export const url=new URL("../icons/burst_mode.svg?v=f6792e8e3b2b283c9626b597f5634057841c1ac160760a2cd8467710fc6891a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
