export const name="nfc";
export const id="dl_b338612cbfd3d07cc9db";
export const url=new URL("../icons/nfc.svg?v=111da5534cd883d2c49bf4aeea1bb1fe4f59bc2491a0be4f04cf9733abb3bfc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
