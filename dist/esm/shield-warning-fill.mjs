export const name="shield-warning-fill";
export const id="dl_2d7442c3bddc0c6f0202";
export const url=new URL("../icons/shield-warning-fill.svg?v=43d670e9156850fdd27c732a4906b1ec82f5d21af45def8e4e3fd3f9a1ec296f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
