export const name="streetview";
export const id="dl_c3357e4fb2b89f24947c";
export const url=new URL("../icons/streetview.svg?v=2186a4363e3ca4234b39de129d7008008cd9045bf4d9844d5c4de6d6660e90bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
