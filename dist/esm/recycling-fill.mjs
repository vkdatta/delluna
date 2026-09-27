export const name="recycling-fill";
export const id="dl_203c1a7255f41aa4d9e1";
export const url=new URL("../icons/recycling-fill.svg?v=5aa2dd0084b89947ab5fd24f6009f8ce291f8e86aa77d38b8b58f6c2dd8a2ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
