export const name="selection-all-fill";
export const id="dl_8a26a389d9bc8c5385c1";
export const url=new URL("../icons/selection-all-fill.svg?v=8f271a318200e97dc6c2fc627cd2912877835c6c11eedeff6928fe888dbffffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
