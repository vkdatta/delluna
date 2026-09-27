export const name="heart_minus-fill";
export const id="dl_0633afd4c6a39b096ef2";
export const url=new URL("../icons/heart_minus-fill.svg?v=8b660cd0720b2d128db289a09da4fc8210060afb8e97a562c621b9702f96b135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
