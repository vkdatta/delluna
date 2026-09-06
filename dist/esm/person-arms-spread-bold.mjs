export const name="person-arms-spread-bold";
export const id="dl_fbbb898c1b8e4d38bfcf";
export const url=new URL("../icons/person-arms-spread-bold.svg?v=7bb22d3a595cc504827fda25515075fadd4c543a74a176a112285677e6c9b88c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
