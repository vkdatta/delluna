export const name="groups_2";
export const id="dl_f1b8ab6edcf22b717932";
export const url=new URL("../icons/groups_2.svg?v=cfc7810cd3be51f4e0de1edce6c057ebc83fe036a0fc10f825b6e0606e9fc8bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
