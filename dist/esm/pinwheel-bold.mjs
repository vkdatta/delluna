export const name="pinwheel-bold";
export const id="dl_adb605a91a5041f88fb8";
export const url=new URL("../icons/pinwheel-bold.svg?v=dc3ce5744fe279b7b90d3634ac0588841a29a45bef670743701cb76d08a3b349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
