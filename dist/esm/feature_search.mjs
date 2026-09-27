export const name="feature_search";
export const id="dl_ab5d5f4374517eb2e974";
export const url=new URL("../icons/feature_search.svg?v=53b98545b8a623d06656432c59741c07c7c744c45b0be151861619a87ac390dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
