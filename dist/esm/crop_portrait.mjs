export const name="crop_portrait";
export const id="dl_0d8196f90fc3ab68ac3d";
export const url=new URL("../icons/crop_portrait.svg?v=4f9b68ae258927285f8ffacad5711de301855a67c15faee687b2dcdaa4777417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
