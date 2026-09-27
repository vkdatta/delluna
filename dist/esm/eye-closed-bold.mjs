export const name="eye-closed-bold";
export const id="dl_872aba0139004478a739";
export const url=new URL("../icons/eye-closed-bold.svg?v=fe560e2001459b48def3edd9a7c1ea88f079356297984111320c854374a09d2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
