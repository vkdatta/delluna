export const name="account_child-fill";
export const id="dl_3d70b3a20f217ac5db70";
export const url=new URL("../icons/account_child-fill.svg?v=b44af2401666038d375021b83849d6bd764c3f090f504552c7862bfd00487ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
