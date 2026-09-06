export const name="folder-simple-dashed-light";
export const id="dl_5e7b9eae24f64ef7bc96";
export const url=new URL("../icons/folder-simple-dashed-light.svg?v=d1dc96cacd8d08182e8c600aa7c57554b12c3f5a1d26c9e65e0d54f28a3f81d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
