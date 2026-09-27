export const name="assignment_globe-fill";
export const id="dl_214acffaab534b0f1f50";
export const url=new URL("../icons/assignment_globe-fill.svg?v=d54985f7bd5710ec5f9da1946674ec99faba9f224bdf1d44d57ed85d2d24ae5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
