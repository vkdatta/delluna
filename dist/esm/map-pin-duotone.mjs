export const name="map-pin-duotone";
export const id="dl_0bc5ac29f9ec439b8539";
export const url=new URL("../icons/map-pin-duotone.svg?v=bca713b2d66be402b0ada1ae73d4f50ea9a01abefc77a72448c25d276b177bc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
