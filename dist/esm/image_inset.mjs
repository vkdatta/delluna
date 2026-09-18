export const name="image_inset";
export const id="dl_a6680991c70b43778044";
export const url=new URL("../icons/image_inset.svg?v=376ca8babac04f12a3a2680f613624d468b25463d1de75db1c0b878505b08ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
