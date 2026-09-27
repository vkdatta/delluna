export const name="sofa-fill";
export const id="dl_b221b7510fe3d4284549";
export const url=new URL("../icons/sofa-fill.svg?v=bd9e2d1770141608e3db4803523431a36bc19ed545438e9ec550b98a6f8137b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
