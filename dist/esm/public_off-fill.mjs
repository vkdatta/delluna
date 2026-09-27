export const name="public_off-fill";
export const id="dl_e6ca846bbf5b900225ee";
export const url=new URL("../icons/public_off-fill.svg?v=c3272c224617708bd8c9378062531b3d7083f717b2011164ba62a0f5636da72c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
