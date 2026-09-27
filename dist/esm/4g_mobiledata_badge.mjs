export const name="4g_mobiledata_badge";
export const id="dl_b7e0a6056bf981f76389";
export const url=new URL("../icons/4g_mobiledata_badge.svg?v=ef95edb49b595cbb739aedf43423561de9d1c183110f2e9a9c8415d4ba88d747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
