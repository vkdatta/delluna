export const name="file-image-bold";
export const id="dl_3d2e86c81077493da408";
export const url=new URL("../icons/file-image-bold.svg?v=4b6f20751bece4e419ae5623dc368b72903d5d90a89c4d0019d3f14a1a0109d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
