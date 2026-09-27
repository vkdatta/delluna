export const name="tab_close-fill";
export const id="dl_c125b2617ca926f78148";
export const url=new URL("../icons/tab_close-fill.svg?v=eedc9fde1796e85ffbfb0a1485caf7c2b66c27d6b8b0edd8dc061c7b539195ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
