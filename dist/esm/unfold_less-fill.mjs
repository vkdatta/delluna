export const name="unfold_less-fill";
export const id="dl_615f8e8791f6b381b20b";
export const url=new URL("../icons/unfold_less-fill.svg?v=15ae93d006c5dbef1dbf45949f06a88b7d5508a8e0f9e500ffae28cc34104e90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
