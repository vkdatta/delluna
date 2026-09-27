export const name="lucid_3-panel-bottom-open";
export const id="dl_c61e2450185c48d89194";
export const url=new URL("../icons/lucid_3-panel-bottom-open.svg?v=fda4a061a42ce09d570910dee06c5d81d2388ec6305159bb9924ab35f1dba71c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
