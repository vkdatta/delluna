export const name="sign_language_off-fill";
export const id="dl_57e2999136e941c3e47e";
export const url=new URL("../icons/sign_language_off-fill.svg?v=3b8b0ea8c701363c83a33841d04b400e7283f0072ba3a0cd9ccde4fdfb5fca48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
