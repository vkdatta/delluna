export const name="house-simple";
export const id="dl_54a99d021aa34518820f";
export const url=new URL("../icons/house-simple.svg?v=afa0dfcd64e8f2013a2cd4db58686a9e081465dad98dccaa7661ee8cc1c5b16a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
