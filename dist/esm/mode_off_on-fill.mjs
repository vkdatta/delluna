export const name="mode_off_on-fill";
export const id="dl_0129ba4729771aafa3d2";
export const url=new URL("../icons/mode_off_on-fill.svg?v=793436ad9e9ab6c6682edcefeffbcd2ed4d6fbccb92c79cb7f5ee7e67a8a3834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
