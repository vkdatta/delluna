export const name="demography-fill";
export const id="dl_82e3d891bc6fd8399b27";
export const url=new URL("../icons/demography-fill.svg?v=2128ef3c3de407e7046c7da01ef9e7c18ba3b4dcded1e3300e65655efbc63e7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
