export const name="golf-fill";
export const id="dl_f8d840d2c9a4450da0e7";
export const url=new URL("../icons/golf-fill.svg?v=e8f9f4e384df97836ccc0d7b648ff6f22b650cd6d84fff790f765bd6d769b516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
