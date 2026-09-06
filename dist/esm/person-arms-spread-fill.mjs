export const name="person-arms-spread-fill";
export const id="dl_a477842228154255b27a";
export const url=new URL("../icons/person-arms-spread-fill.svg?v=cff2b27cc658c94ff39667cd9a9d37ce55e632387a6759cb2a8aa2cf5aaa4e89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
