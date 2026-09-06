export const name="bed-fill";
export const id="dl_09418dbaf3084688972c";
export const url=new URL("../icons/bed-fill.svg?v=5bac7832afd8a5386383f2b47df86f59fbd3a4b2a9f33f3539be7b653ad19429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
