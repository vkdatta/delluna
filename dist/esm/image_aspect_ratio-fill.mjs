export const name="image_aspect_ratio-fill";
export const id="dl_73b6418ca87f3f084edd";
export const url=new URL("../icons/image_aspect_ratio-fill.svg?v=ea20dd21699933f84ff1e445bc64efd7bac9565594e6ec6368b1e09b6bb1d095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
