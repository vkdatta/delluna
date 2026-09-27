export const name="tab";
export const id="dl_d09146c110da38a99839";
export const url=new URL("../icons/tab.svg?v=f436fd172c09555bab336128d9cc470f07a5ecc088095d42b1598ad6cb895ecb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
