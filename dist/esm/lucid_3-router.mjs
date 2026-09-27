export const name="lucid_3-router";
export const id="dl_e31df08499634d6ca69b";
export const url=new URL("../icons/lucid_3-router.svg?v=11b8db75b9be249298e57ca5aaea68ed9aee3bc4f942d9418e2fc901243a8f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
