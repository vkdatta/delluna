export const name="variable_remove";
export const id="dl_d8b8c2072ad2a9487eef";
export const url=new URL("../icons/variable_remove.svg?v=5373d4c3cacc1865110403afd2a73624b3f532ea9d623e2f481275fb99dba8bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
