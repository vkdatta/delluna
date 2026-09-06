export const name="image-square-fill";
export const id="dl_74d585157b4b4853b06a";
export const url=new URL("../icons/image-square-fill.svg?v=f3d12bd7542fdc156d890002c5bef32595fc19e13fe639da4abd93cb17848c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
