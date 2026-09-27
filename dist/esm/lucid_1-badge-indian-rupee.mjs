export const name="lucid_1-badge-indian-rupee";
export const id="dl_e8c274543c814bf6b52f";
export const url=new URL("../icons/lucid_1-badge-indian-rupee.svg?v=c1d30978c3eda60f60ccdfe3380ca12966d612166019e0e8fe9a0ed27a13df27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
