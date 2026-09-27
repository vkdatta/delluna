export const name="category-shapes";
export const id="dl_31d87a6d2ee25ab60069";
export const url=new URL("../icons/category-shapes.svg?v=e183d0e84b19dba302835b1cd6e8648978305687bf9efd2e1a813f1de2edaf6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
