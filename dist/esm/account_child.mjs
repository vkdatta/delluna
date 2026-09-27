export const name="account_child";
export const id="dl_3aaed500ca7dd548779a";
export const url=new URL("../icons/account_child.svg?v=74482858a16bb1a3c879492f7cfd5cde542330df287820b806cfc46160186674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
