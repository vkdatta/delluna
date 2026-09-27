export const name="communities";
export const id="dl_de86d2d587a177f23729";
export const url=new URL("../icons/communities.svg?v=cb5dba166bf6067f57bf84598cd5e3cacea25012d9b12c367df0f0625d94202a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
