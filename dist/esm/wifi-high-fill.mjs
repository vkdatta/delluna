export const name="wifi-high-fill";
export const id="dl_9857acae1c81d033e578";
export const url=new URL("../icons/wifi-high-fill.svg?v=381f034ac5458ec93bf4706ecde3177dba44fcfa3dd7fb23506fd07917fa5344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
