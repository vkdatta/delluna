export const name="magnet-duotone";
export const id="dl_20428069ccb5427f9b3b";
export const url=new URL("../icons/magnet-duotone.svg?v=9103a9b9f5d9ca58d18160694f9dc1b9c8e4cfc4e903fcb70845ceb7800e4242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
