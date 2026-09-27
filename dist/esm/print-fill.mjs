export const name="print-fill";
export const id="dl_a20ce265ef9ff022d269";
export const url=new URL("../icons/print-fill.svg?v=b5f19a61d401737a046faf68e0127bedde4de052f6c0a9e64a4eff5bde0b1bb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
