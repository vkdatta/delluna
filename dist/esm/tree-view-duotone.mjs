export const name="tree-view-duotone";
export const id="dl_d104b0247250bc8004ea";
export const url=new URL("../icons/tree-view-duotone.svg?v=8c708701fc4c047f8c0a4fa47d76ec1544b65e79df69803d2cdcd2a83760816f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
