export const name="gps-fix-duotone";
export const id="dl_33da79316ede4245b96b";
export const url=new URL("../icons/gps-fix-duotone.svg?v=385cf208ea5ef1c77a27c4dcca7a9051d5cea701fba0c5f33bb1848cd5d22595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
