export const name="shop-fill";
export const id="dl_ae7bb8100a1638316273";
export const url=new URL("../icons/shop-fill.svg?v=a2ec9540c3c10f68b126ff2bcf81a02ddc4af8af44990007d08b5dbe409c2677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
