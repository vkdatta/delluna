export const name="tree-palm-duotone";
export const id="dl_d34ad996459997fb76ca";
export const url=new URL("../icons/tree-palm-duotone.svg?v=af401ee542549624eea6692fe810dbbfebc5fd1fdb5cddaa37a22c76b035e04e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
