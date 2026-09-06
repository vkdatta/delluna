export const name="password-duotone";
export const id="dl_ab06c393fcc2421380e4";
export const url=new URL("../icons/password-duotone.svg?v=0b7d1e2997ea6420345d13716d44e04131f8bb4fe86dabc55cb1bbacd1b3a175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
