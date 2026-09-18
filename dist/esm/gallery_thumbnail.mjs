export const name="gallery_thumbnail";
export const id="dl_3912aa5d59a34f7c9320";
export const url=new URL("../icons/G/gallery_thumbnail.svg?v=c5d6be8ea91ecf2e0478a6d92873ede6b1aa253045100fa21d3ced28df551d40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
