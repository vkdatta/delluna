export const name="nightlife";
export const id="dl_5d4bd8ca743a4c899eb9";
export const url=new URL("../icons/nightlife.svg?v=db90253e05d4f7454136f0a52f5c437cbcfe92070b0287e2ed495300ee74b9ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
