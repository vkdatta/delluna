export const name="arrow-line-up-fill";
export const id="dl_cda162d456264d399575";
export const url=new URL("../icons/arrow-line-up-fill.svg?v=ee36a9ee3602e3bf4154e50a10b3dee9e5c3e05bd1f949cce9ea56bd19516ac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
