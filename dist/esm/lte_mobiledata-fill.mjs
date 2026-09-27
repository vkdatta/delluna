export const name="lte_mobiledata-fill";
export const id="dl_1736eb4960170b986083";
export const url=new URL("../icons/lte_mobiledata-fill.svg?v=b5776a5a8da78a6cd80db8938e06c3d28e7cefa681070c52214b56ff6dc3ae60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
