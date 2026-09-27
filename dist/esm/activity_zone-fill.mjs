export const name="activity_zone-fill";
export const id="dl_51b475bc259bfdf58eb1";
export const url=new URL("../icons/activity_zone-fill.svg?v=57b94eece2e22b7393b6783b36c8d8ffebc79757b0de634bfdd973195c93704b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
