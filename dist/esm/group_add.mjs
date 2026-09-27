export const name="group_add";
export const id="dl_97210b85a98bcbf1eb98";
export const url=new URL("../icons/group_add.svg?v=b2b90a8e50b95db320f58b1296856ab385747abd1ba5f00fbdf9da852014c5f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
