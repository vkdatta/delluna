export const name="folder-simple-dashed-light";
export const id="dl_5e7b9eae24f64ef7bc96";
export const url=new URL("../icons/folder-simple-dashed-light.svg?v=428850a32d89fc0df08d08bf1a8377b06d55f64d9cc1cd17079bc051ada017d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
