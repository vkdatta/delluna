export const name="arrow-elbow-right-fill";
export const id="dl_ad5ba154db9149968291";
export const url=new URL("../icons/arrow-elbow-right-fill.svg?v=6ff6abe999b57d16dbd9e1f990797dbd9d523a4ba0a87c045a2d0fd4be6e8828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
