export const name="commute-fill";
export const id="dl_228349692e824d329c49";
export const url=new URL("../icons/commute-fill.svg?v=ba1547b052d9135c2e92d64e2d8be211de8f7187d4c1107543b49eb17b93ad42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
