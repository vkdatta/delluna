export const name="gallery_thumbnail-fill";
export const id="dl_c76fd292aaf278c5b15b";
export const url=new URL("../icons/gallery_thumbnail-fill.svg?v=9544d5b898796184b159ff3738619d2d3338a930368c1ceece0cd09149003dff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
