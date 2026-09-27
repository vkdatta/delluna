export const name="person-simple-snowboard-duotone";
export const id="dl_6569a44512fa4e968a1d";
export const url=new URL("../icons/person-simple-snowboard-duotone.svg?v=fc091c954a01dfa769e8d9266fd67565a0c56cb3e5c7075cc0dd855bf6009b6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
