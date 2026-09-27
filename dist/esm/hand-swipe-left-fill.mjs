export const name="hand-swipe-left-fill";
export const id="dl_2a5b6e090883459e9c05";
export const url=new URL("../icons/hand-swipe-left-fill.svg?v=93384eb73ade8068b39b6de021c2edef2497aa4d67229b6b3d954de673988ae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
