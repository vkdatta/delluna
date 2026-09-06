export const name="picnic-table-duotone";
export const id="dl_a262535457f144ca93d7";
export const url=new URL("../icons/picnic-table-duotone.svg?v=cea57bca1ad43ad3204d3517a06f84bdfad996d948dad225147f8782df002b99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
