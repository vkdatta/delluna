export const name="onigiri-fill";
export const id="dl_156cd9c5b1f449a98f56";
export const url=new URL("../icons/onigiri-fill.svg?v=760f120ab81e5ea761b652a93ed0550ac6189cbf78b206e25695329cd4a4223a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
