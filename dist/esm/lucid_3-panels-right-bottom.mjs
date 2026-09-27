export const name="lucid_3-panels-right-bottom";
export const id="dl_eca2b1a7179e4bd7a2b1";
export const url=new URL("../icons/lucid_3-panels-right-bottom.svg?v=43bdd362e854075d275aee766572ef9eb7380fd3c4e1ced57a74fa3b5ac3c797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
