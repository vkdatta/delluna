export const name="variable_add-fill";
export const id="dl_50cae405c84f478ef383";
export const url=new URL("../icons/variable_add-fill.svg?v=788cc14d49b83127596777f13b827e9d91b88c81023f0643ffbbfa8542d5a1ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
