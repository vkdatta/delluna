export const name="vertical_distribute-fill";
export const id="dl_04477b9dd51f3362f80e";
export const url=new URL("../icons/vertical_distribute-fill.svg?v=9ceec07cb7f2d31f724e7fcd550169c14630121283154277c7cde5d24c1b09b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
