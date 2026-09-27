export const name="quick_reorder";
export const id="dl_50b784a2b1ab33d32c92";
export const url=new URL("../icons/quick_reorder.svg?v=2d5532a1cdc43b3247955253086b2a3985ba0f14715557e0faf7c9d46c4d5d40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
