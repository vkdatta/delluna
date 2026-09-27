export const name="collections_bookmark-fill";
export const id="dl_7f022fa7d57a6f1374ef";
export const url=new URL("../icons/collections_bookmark-fill.svg?v=33ee7c978ed93398337e32526c38da50c190335b8fc2ae6c1016faaa0d331c98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
