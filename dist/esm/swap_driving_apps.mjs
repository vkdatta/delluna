export const name="swap_driving_apps";
export const id="dl_5c9179393a15389ee619";
export const url=new URL("../icons/swap_driving_apps.svg?v=2cc89a243b12c33e0c1e5074fb5f5dacf5e86906f423c5bf94fd3deb5190c3c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
