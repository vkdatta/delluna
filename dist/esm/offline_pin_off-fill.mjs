export const name="offline_pin_off-fill";
export const id="dl_28161d7a44e33e64571c";
export const url=new URL("../icons/offline_pin_off-fill.svg?v=b75748ee61ee20e0f2decded503be9b4fb6c61e9e1d915206f18fe2d9a56fe9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
