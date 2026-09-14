export const name="animated_images";
export const id="dl_ba0b68c1d372491db1ae";
export const url=new URL("../icons/A/animated_images.svg?v=f9fc28f385796028c5f8bad3d6f0daa7ae228b137f08e6fd3ca5ca6c3008fecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
