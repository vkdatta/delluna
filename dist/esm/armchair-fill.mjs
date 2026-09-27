export const name="armchair-fill";
export const id="dl_84f677ca8d844f339efa";
export const url=new URL("../icons/armchair-fill.svg?v=8b504578d6c8d5267db8bcfc58bb89d23973c12f94fae8830fa88591e971595a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
