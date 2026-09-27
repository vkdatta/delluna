export const name="virtual-reality-duotone";
export const id="dl_ad76dff4c2928d36b300";
export const url=new URL("../icons/virtual-reality-duotone.svg?v=b0d3098636385448e4afae4546649928e0fa8024d3531affee0128dab5b71c64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
