export const name="folder-simple-user-duotone";
export const id="dl_6155350b17f249599cd1";
export const url=new URL("../icons/folder-simple-user-duotone.svg?v=575735ec6c2f31fd4198f9e4596335c0def2921ecbb12d5a62d9137ac0034a4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
