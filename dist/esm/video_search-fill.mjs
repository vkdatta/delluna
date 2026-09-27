export const name="video_search-fill";
export const id="dl_23274e86a5a11c04253e";
export const url=new URL("../icons/video_search-fill.svg?v=654f6d686718331f1105cf64d9aef00457bd1f16093d00b817cf83e9330963fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
