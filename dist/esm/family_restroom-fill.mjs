export const name="family_restroom-fill";
export const id="dl_7f50a42a2f3000638849";
export const url=new URL("../icons/family_restroom-fill.svg?v=ee57373f6b86580f8217e0a3f2570ceccfe6f467d97749cde494f3a0591344d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
