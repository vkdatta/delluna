export const name="12mp-fill";
export const id="dl_1ea608a838700bbbccfc";
export const url=new URL("../icons/12mp-fill.svg?v=cadff999c72b8bd63efb8e8570d03d084ed02340f3518ba8baf6aa893a83ad26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
