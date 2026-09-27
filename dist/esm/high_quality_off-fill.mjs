export const name="high_quality_off-fill";
export const id="dl_e1a6f13383c551ff0460";
export const url=new URL("../icons/high_quality_off-fill.svg?v=9de8b74a4749063b9139cd4c41201d362252ea808679f9c2595d43970752580e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
