export const name="cabin-fill";
export const id="dl_bfe6e8b55b954004bc98";
export const url=new URL("../icons/cabin-fill.svg?v=5b1cbefa20512de0566d7534d3d15db359b9f5f14991f2f0be58a72e81a32885",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
