export const name="lucid_3-square-arrow-right";
export const id="dl_ffb095a64bdf4caa92b7";
export const url=new URL("../icons/lucid_3-square-arrow-right.svg?v=933032edcb1139971f3980daaa5607426f962c432e66ebcac70efde759e3a90d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
