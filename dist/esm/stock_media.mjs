export const name="stock_media";
export const id="dl_b319d6efe6d8ad6b2ad5";
export const url=new URL("../icons/stock_media.svg?v=47ce196b26289f29e5dd3f326cf7e026317f08ac3f2d35a0f214456b0fae58de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
