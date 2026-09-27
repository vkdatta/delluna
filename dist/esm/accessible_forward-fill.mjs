export const name="accessible_forward-fill";
export const id="dl_56b9c7be95bf98ca927b";
export const url=new URL("../icons/accessible_forward-fill.svg?v=9368de23d3f367ff61b3d4980e2ca2ab720f247d282d4c6239fe79c6b5e6d224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
