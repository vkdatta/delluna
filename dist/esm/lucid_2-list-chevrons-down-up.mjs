export const name="lucid_2-list-chevrons-down-up";
export const id="dl_8c3f5a31b788449aa28e";
export const url=new URL("../icons/lucid_2-list-chevrons-down-up.svg?v=9fc4271fd97d2e8402d7a5431c418c82a3962f530f80c0dcbbdba227c7645059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
