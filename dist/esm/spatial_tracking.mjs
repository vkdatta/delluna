export const name="spatial_tracking";
export const id="dl_21b9c0e2878b423c8943";
export const url=new URL("../icons/spatial_tracking.svg?v=21f2ef6e9dcc7d1ecb3359feae765a126bdadd09a439abf80b29b0592d6f7d1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
