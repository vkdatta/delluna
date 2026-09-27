export const name="tenancy-fill";
export const id="dl_0684c9f0db0390c96cd1";
export const url=new URL("../icons/tenancy-fill.svg?v=42a9cd033e3fcd8af96bc3672c7710aa157a2013c09982b8b6ffa79b75f56573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
