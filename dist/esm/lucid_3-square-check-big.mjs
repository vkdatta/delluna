export const name="lucid_3-square-check-big";
export const id="dl_29f0028cc61f4d2aa811";
export const url=new URL("../icons/lucid_3-square-check-big.svg?v=8fa30107e031e919843c816c37875a6fc91c28763f2849031e84291501e9e391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
