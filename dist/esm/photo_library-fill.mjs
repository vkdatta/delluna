export const name="photo_library-fill";
export const id="dl_f90057daa0259c232310";
export const url=new URL("../icons/photo_library-fill.svg?v=7c7558dcd2e6ac9ff014c2c8bd40476741b278624e280dca90d83eab1865f313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
