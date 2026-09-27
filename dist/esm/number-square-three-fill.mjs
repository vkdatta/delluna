export const name="number-square-three-fill";
export const id="dl_fb6eebee269442748447";
export const url=new URL("../icons/number-square-three-fill.svg?v=8259c1430a17be457d3a3a1313dfc57d15ab73ddda3f6593b4b4ba464f56bcfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
