export const name="intersect-three-fill";
export const id="dl_39866194247f48b99d34";
export const url=new URL("../icons/intersect-three-fill.svg?v=8473cc2d7531e6fe213d8fb605c34ec6aa95816354fc297c17882dbef39035f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
