export const name="swipe_vertical";
export const id="dl_dc2347ea1978222af5bb";
export const url=new URL("../icons/swipe_vertical.svg?v=0377b19003bea724ef955443e5be6c7b2503212b315a30c9218b83971b59918c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
