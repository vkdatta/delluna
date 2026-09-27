export const name="lucid_2-list-tree";
export const id="dl_41aba6495a1946099b47";
export const url=new URL("../icons/lucid_2-list-tree.svg?v=167211eec61c01edcadc60e1b344e85c37e256df4dc65550f81004a2a01cb1af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
