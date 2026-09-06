export const name="map-pin-plus-duotone";
export const id="dl_da928b5c0bb440a18910";
export const url=new URL("../icons/map-pin-plus-duotone.svg?v=aa163a0b769683d92e0ee3c6cdc4ca07609d78023c87fe8a1dd27ec3f52baa6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
