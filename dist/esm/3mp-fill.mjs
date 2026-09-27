export const name="3mp-fill";
export const id="dl_ad3d4e4f7265b0cf9312";
export const url=new URL("../icons/3mp-fill.svg?v=6de7da5688cec0f34149df153bb3b2919e7cb4a0ae254b32b6674194373a1906",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
