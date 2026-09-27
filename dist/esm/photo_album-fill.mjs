export const name="photo_album-fill";
export const id="dl_1e1afd860ecbbb01122e";
export const url=new URL("../icons/photo_album-fill.svg?v=749b19cfb0ebed7dfc0c2b137506896e28cf3f06fe7ee79b0a9b8f140132c654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
