export const name="gallery_thumbnail-fill";
export const id="dl_693eebdf9e77462aa9b3";
export const url=new URL("../icons/gallery_thumbnail-fill.svg?v=6f336315a31f1f1b0185ea625badc21444deb209f9707629afdb99d78e5f6587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
