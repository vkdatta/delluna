export const name="person-arms-spread-light";
export const id="dl_8a3e077418e1427bb44e";
export const url=new URL("../icons/person-arms-spread-light.svg?v=a80e4edac670570db314cb1c65bead3f651abac21f4bd789c2e2acd809a899e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
