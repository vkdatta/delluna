export const name="tree-structure-duotone";
export const id="dl_0e527ca6c93e68361a22";
export const url=new URL("../icons/tree-structure-duotone.svg?v=0646b61a96533ab0c2763ffe2bae8d82bf29fa5b731a99dd44c8b2778058a002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
