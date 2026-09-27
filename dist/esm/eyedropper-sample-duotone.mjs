export const name="eyedropper-sample-duotone";
export const id="dl_de31d2ae710f47aa95a6";
export const url=new URL("../icons/eyedropper-sample-duotone.svg?v=5a55399191003b92dfd8511f3439cb8acb138f92866c04c35d9aeb7a162fc723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
