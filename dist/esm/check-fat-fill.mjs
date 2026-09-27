export const name="check-fat-fill";
export const id="dl_681192422b224cd3be66";
export const url=new URL("../icons/check-fat-fill.svg?v=e8886cba2be7f7769c2e840715ff6ec0692305e0adf37589dd8bcf4cb7dacdca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
