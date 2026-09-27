export const name="privacy_tip";
export const id="dl_e605bc93ba75a08bd411";
export const url=new URL("../icons/privacy_tip.svg?v=eba3cea6df60374ebaa45f1def1df567a0478df86b27d9455473db8ecac492b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
