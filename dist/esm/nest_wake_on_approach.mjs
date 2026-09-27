export const name="nest_wake_on_approach";
export const id="dl_2b2824dd6f4905e47ac6";
export const url=new URL("../icons/nest_wake_on_approach.svg?v=eba9162dab94f1e5bbb7e4451c973574564cf57f756843e58b32a5cf0ce8f89d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
