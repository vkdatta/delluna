export const name="ice_skating-fill";
export const id="dl_c97d8c6d29ae63b97c81";
export const url=new URL("../icons/ice_skating-fill.svg?v=caf1a64d0cd37129baacf543f6ecb254e27b2f837cb678211243742f7ff817fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
