export const name="cash-register-duotone";
export const id="dl_0e0d89f956454cbaa21b";
export const url=new URL("../icons/cash-register-duotone.svg?v=7365166ecdad85f361d88675bae17038063003af2984591bd6e8d579104bc641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
