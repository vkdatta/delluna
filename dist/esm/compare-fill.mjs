export const name="compare-fill";
export const id="dl_40b3eb4dc3838aa727d7";
export const url=new URL("../icons/compare-fill.svg?v=b7a47703743f107f9cdc44180ef6dd3e42a4f2f8968265454b342478a170ee12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
