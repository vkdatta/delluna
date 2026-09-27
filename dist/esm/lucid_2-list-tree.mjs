export const name="lucid_2-list-tree";
export const id="dl_41aba6495a1946099b47";
export const url=new URL("../icons/lucid_2-list-tree.svg?v=28153618687ea3ca2920e103b587b389f3c8be03ce17b2e0e2835fe273d0d309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
