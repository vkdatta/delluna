export const name="share-duotone";
export const id="dl_3bf8f2a9e0ed400425a8";
export const url=new URL("../icons/share-duotone.svg?v=64906f54fda2da4cf451a095738ab33fff06646ea9aec551fb452f5163d99109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
