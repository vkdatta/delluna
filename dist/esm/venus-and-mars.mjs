export const name="venus-and-mars";
export const id="dl_ea756cbab4a74ad6a253";
export const url=new URL("../icons/venus-and-mars.svg?v=7a535dee6a057a31c7ba1808e82cb487aa015a0a0514167a89a688d457016890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
