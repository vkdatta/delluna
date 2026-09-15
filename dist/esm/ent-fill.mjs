export const name="ent-fill";
export const id="dl_4e474074cc9b47eb84f8";
export const url=new URL("../icons/E/ent-fill.svg?v=6c13ade9c2424cef4fc012f350af26c0829cd1ae6e1846609efd2cd7ca8dc59e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
