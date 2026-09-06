export const name="corners-in-light";
export const id="dl_e5987bee0eb14d8eba97";
export const url=new URL("../icons/corners-in-light.svg?v=8f475bd066a723ceb5ac0e98fea37980cdef05990bfd4629d3c0a6164d25d424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
