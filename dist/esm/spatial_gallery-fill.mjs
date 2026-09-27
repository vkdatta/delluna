export const name="spatial_gallery-fill";
export const id="dl_b793944c15843f79c7bf";
export const url=new URL("../icons/spatial_gallery-fill.svg?v=2b897307d09b3c84d65b6bfe7c9da9afddecb83b76421e79b66a44d3d76f3291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
