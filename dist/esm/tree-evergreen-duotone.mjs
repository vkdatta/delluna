export const name="tree-evergreen-duotone";
export const id="dl_8bdc28ea286e21691ed4";
export const url=new URL("../icons/tree-evergreen-duotone.svg?v=7de40204d0d6e812d4906d85d263a80b002e7d6a8efb263816a751734737e789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
