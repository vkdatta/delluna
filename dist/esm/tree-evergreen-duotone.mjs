export const name="tree-evergreen-duotone";
export const id="dl_d9c1af4675eaf97b3e0a";
export const url=new URL("../icons/tree-evergreen-duotone.svg?v=523c9c971f2b7354c255e3998a834ee499c135f1a28a65a98df12ed8fd5cd8bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
