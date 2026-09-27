export const name="spatial_tracking";
export const id="dl_85ed81a6b463c8958e45";
export const url=new URL("../icons/spatial_tracking.svg?v=2ece8f6a45dbd5811ee4cb2b622594268e050e0756aea98b99a080d5ae09bfdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
