export const name="virtual-reality-fill";
export const id="dl_0e1e7cd9b46ac8c9069b";
export const url=new URL("../icons/virtual-reality-fill.svg?v=4773af284f7259af1ca39cdb7bf0f7fbd3f904f5f34668bbc49f4719d3875f0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
