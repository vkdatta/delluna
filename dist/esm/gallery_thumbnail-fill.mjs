export const name="gallery_thumbnail-fill";
export const id="dl_bfb3bd29825da829cb8e";
export const url=new URL("../icons/gallery_thumbnail-fill.svg?v=32b258d0f6e1d4fa3b4331b999cdf0fbd16ae0e8f4a558bfaf4c54c69e73ed25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
