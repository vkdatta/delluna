export const name="warehouse-fill";
export const id="dl_e3a9d324a31293464160";
export const url=new URL("../icons/warehouse-fill.svg?v=cf081bfd6d4122fe3cf7028ed1fb6342e67e23b26efb1450a542d4ec540e8fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
