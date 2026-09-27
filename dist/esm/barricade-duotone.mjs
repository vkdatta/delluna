export const name="barricade-duotone";
export const id="dl_7fac7471c9cd48f294f2";
export const url=new URL("../icons/barricade-duotone.svg?v=b467199d289239e58c473f62353dce45c01b6483f30fff1010d3fb5f56a1289a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
