export const name="lte_mobiledata-fill";
export const id="dl_38c0c006414e4553b522";
export const url=new URL("../icons/lte_mobiledata-fill.svg?v=83587e55a796f16db214aa1b43d230e766dbb149204d95d280674f7de31d766c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
