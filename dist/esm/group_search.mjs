export const name="group_search";
export const id="dl_57d51f495f0d45278408";
export const url=new URL("../icons/G/group_search.svg?v=303043ed3106714413f3463cfc95688ca6c622f8f0a62c46eb5b40132542ca73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
