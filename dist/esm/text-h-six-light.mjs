export const name="text-h-six-light";
export const id="dl_cd7559b5352fa745180c";
export const url=new URL("../icons/text-h-six-light.svg?v=bd1083a3a1d09f0be523bdddd25e7ee9208205566fe5004812445d9d8507dd5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
