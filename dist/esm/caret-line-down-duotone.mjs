export const name="caret-line-down-duotone";
export const id="dl_b423fda56265429583a8";
export const url=new URL("../icons/caret-line-down-duotone.svg?v=9dcac53f4c962f53d984dc87cbeef4a54e08f9ab862d221fb2d761a3d418044c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
